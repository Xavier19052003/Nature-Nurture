#!/usr/bin/env python3
"""Ingest PDF imagery into a reviewable asset library.

The source PDFs are read only. Re-running the pipeline replaces only generated
asset outputs, never the source-material directory or the production product
asset directory.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import shutil
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable

try:
    import fitz
    from PIL import Image, ImageDraw, ImageFont
except ImportError as error:  # pragma: no cover - exercised in setup failures
    raise SystemExit(
        "Asset ingestion requires PyMuPDF and Pillow. "
        "Install them with: python -m pip install -r requirements-assets.txt"
    ) from error

ROOT = Path(__file__).resolve().parents[2]
PROJECT_ROOT = ROOT
SOURCE_DIR = PROJECT_ROOT / "source-material"
IMAGES_DIR = ROOT / "public" / "images"
EXTRACTED_DIR = IMAGES_DIR / "_extracted"
PAGES_DIR = IMAGES_DIR / "_pages"
REVIEW_DIR = IMAGES_DIR / "_review"
DOCS_DIR = ROOT / "docs"
INVENTORY_PATH = DOCS_DIR / "assets.json"
INVENTORY_MD_PATH = DOCS_DIR / "asset-inventory.md"
REVIEW_MD_PATH = DOCS_DIR / "product-image-review.md"
SHEET_SIZE = (1800, 1200)
THUMB_SIZE = (320, 250)
SHEET_COLUMNS = 4
SHEET_ROWS = 3

PRODUCT_TERMS = {
    "B12 + Folate": ("b12", "folate"),
    "Iron / Yster": ("iron", "yster"),
    "Vitamin D3 + K2": ("vitamin d3", "vitamin k2"),
    "Chocolate Crave": ("chocolate crave",),
    "Infant Starter Formula": ("infant starter formula", "stage 1", "0-6 months"),
    "Follow-On Formula": ("follow-on formula", "stage 2", "6-12 months"),
    "Zingo Orange Boost": ("zingo", "orange boost"),
}


@dataclass
class Asset:
    id: str
    filename: str
    sourcePdf: str
    page: int
    width: int
    height: int
    type: str
    status: str = "unreviewed"
    imageIndex: int | None = None
    fileType: str | None = None
    product: str | None = None
    confidence: str = "needs-review"
    sourceText: str | None = None


def pdfs() -> list[Path]:
    if not SOURCE_DIR.exists():
        return []
    return sorted(
        (path for path in SOURCE_DIR.rglob("*") if path.is_file() and path.suffix.lower() == ".pdf"),
        key=lambda path: str(path).lower(),
    )


def reset_generated(directory: Path) -> None:
    directory.mkdir(parents=True, exist_ok=True)
    for child in directory.iterdir():
        if child.is_dir():
            shutil.rmtree(child)
        else:
            child.unlink()


def clean_name(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def asset_id(source: str, page: int, index: int, kind: str) -> str:
    raw = f"{source}|{page}|{index}|{kind}".encode("utf-8")
    return f"asset-{hashlib.sha1(raw).hexdigest()[:12]}"


def product_context(text: str) -> tuple[str | None, str, str | None]:
    lowered = text.lower()
    matches = [name for name, terms in PRODUCT_TERMS.items() if any(term in lowered for term in terms)]
    if len(matches) == 1:
        return matches[0], "needs-review", text.strip()[:240] or None
    return None, "needs-review", text.strip()[:240] or None


def save_embedded(document: fitz.Document, pdf_path: Path, assets: list[Asset]) -> None:
    source_name = pdf_path.name
    source_slug = clean_name(pdf_path.stem) or "source"
    for page_number, page in enumerate(document, start=1):
        page_text = page.get_text("text")
        for image_index, image_info in enumerate(page.get_images(full=True), start=1):
            xref = image_info[0]
            extracted = document.extract_image(xref)
            if not extracted.get("image"):
                continue
            extension = extracted.get("ext", "bin")
            filename = f"{source_slug}-page-{page_number:02d}-image-{image_index:02d}.{extension}"
            output_path = EXTRACTED_DIR / filename
            output_path.write_bytes(extracted["image"])
            product, confidence, context = product_context(page_text)
            assets.append(
                Asset(
                    id=asset_id(source_name, page_number, image_index, "embedded-image"),
                    filename=filename,
                    sourcePdf=source_name,
                    page=page_number,
                    width=int(extracted.get("width", 0)),
                    height=int(extracted.get("height", 0)),
                    type="embedded-image",
                    imageIndex=image_index,
                    fileType=extension,
                    product=product,
                    confidence=confidence,
                    sourceText=context,
                )
            )


def render_pages(document: fitz.Document, pdf_path: Path, assets: list[Asset]) -> None:
    source_slug = clean_name(pdf_path.stem) or "source"
    source_name = pdf_path.name
    for page_number, page in enumerate(document, start=1):
        pixmap = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
        filename = f"{source_slug}-page-{page_number:02d}.png"
        pixmap.save(str(PAGES_DIR / filename))
        product, confidence, context = product_context(page.get_text("text"))
        assets.append(
            Asset(
                id=asset_id(source_name, page_number, 0, "rendered-page"),
                filename=filename,
                sourcePdf=source_name,
                page=page_number,
                width=pixmap.width,
                height=pixmap.height,
                type="rendered-page",
                product=product,
                confidence=confidence,
                sourceText=context,
            )
        )


def font(size: int):
    try:
        return ImageFont.truetype("arial.ttf", size)
    except OSError:
        return ImageFont.load_default()


def sheet_items(assets: Iterable[Asset]) -> list[Asset]:
    return [asset for asset in assets if asset.type == "embedded-image"]


def create_contact_sheets(assets: list[Asset]) -> list[str]:
    items = sheet_items(assets)
    if not items:
        return []
    sheet_paths: list[str] = []
    per_sheet = SHEET_COLUMNS * SHEET_ROWS
    for sheet_number, start in enumerate(range(0, len(items), per_sheet), start=1):
        current = items[start : start + per_sheet]
        canvas = Image.new("RGB", SHEET_SIZE, "#f5f2e9")
        draw = ImageDraw.Draw(canvas)
        title_font = font(28)
        label_font = font(17)
        for position, asset in enumerate(current):
            column = position % SHEET_COLUMNS
            row = position // SHEET_COLUMNS
            x = column * (SHEET_SIZE[0] // SHEET_COLUMNS)
            y = row * (SHEET_SIZE[1] // SHEET_ROWS)
            image_path = EXTRACTED_DIR / asset.filename
            try:
                preview = Image.open(image_path).convert("RGB")
                preview.thumbnail(THUMB_SIZE)
                image_x = x + (SHEET_SIZE[0] // SHEET_COLUMNS - preview.width) // 2
                canvas.paste(preview, (image_x, y + 28))
            except (OSError, ValueError):
                draw.rectangle((x + 30, y + 30, x + 390, y + 270), outline="#b34d68", width=3)
                draw.text((x + 80, y + 140), "Preview unavailable", fill="#b34d68", font=label_font)
            lines = [asset.filename, f"Source: {asset.sourcePdf}", f"Page: {asset.page} | {asset.width} x {asset.height}"]
            for line_number, line in enumerate(lines):
                draw.text((x + 28, y + 292 + line_number * 25), line[:54], fill="#172019", font=label_font)
            draw.text((x + 28, y + 375), asset.id, fill="#3e6b3f", font=label_font)
        output_name = f"contact-sheet-{sheet_number:02d}.png"
        canvas.save(DOCS_DIR / output_name, optimize=True)
        sheet_paths.append(f"docs/{output_name}")
    return sheet_paths


def write_docs(assets: list[Asset], sheet_paths: list[str], pdf_count: int, page_count: int) -> None:
    DOCS_DIR.mkdir(exist_ok=True)
    INVENTORY_PATH.write_text(json.dumps([asdict(asset) for asset in assets], indent=2) + "\n", encoding="utf-8")
    inventory_rows = [
        "# Asset Inventory",
        "",
        f"Generated by `npm run assets:all`. PDFs discovered: {pdf_count}. Pages rendered: {page_count}.",
        "",
        "| ID | Filename | Source PDF | Page | Dimensions | Type | Product | Status |",
        "|---|---|---|---:|---:|---|---|---|",
    ]
    for asset in assets:
        product = asset.product or "Unassigned"
        inventory_rows.append(f"| `{asset.id}` | `{asset.filename}` | `{asset.sourcePdf}` | {asset.page} | {asset.width} x {asset.height} | {asset.type} | {product} | {asset.status} |")
    INVENTORY_MD_PATH.write_text("\n".join(inventory_rows) + "\n", encoding="utf-8")

    review_rows = [
        "# Product Image Review",
        "",
        "Use the contact sheets to inspect candidates. Copy only confirmed product images to `public/images/products/`; keep uncertain candidates in `public/images/_review/`.",
        "",
        "| Product | Candidate Image | Source PDF | Page | Confidence | Status |",
        "|---|---|---|---:|---|---|",
    ]
    for asset in sheet_items(assets):
        review_rows.append(f"| {asset.product or 'Needs identification'} | `{asset.filename}` | `{asset.sourcePdf}` | {asset.page} | {asset.confidence} | {asset.status.upper()} |")
    if not sheet_items(assets):
        review_rows.append("| Needs identification | No embedded images discovered | - | - | needs-review | UNREVIEWED |")
    REVIEW_MD_PATH.write_text("\n".join(review_rows) + "\n", encoding="utf-8")


def run_pipeline() -> dict[str, int | list[str]]:
    discovered = pdfs()
    reset_generated(EXTRACTED_DIR)
    reset_generated(PAGES_DIR)
    assets: list[Asset] = []
    page_count = 0
    for pdf_path in discovered:
        with fitz.open(pdf_path) as document:
            page_count += len(document)
            save_embedded(document, pdf_path, assets)
            render_pages(document, pdf_path, assets)
    sheet_paths = create_contact_sheets(assets)
    write_docs(assets, sheet_paths, len(discovered), page_count)
    return {
        "pdfs": len(discovered),
        "pages": page_count,
        "embedded": len(sheet_items(assets)),
        "rendered": len([asset for asset in assets if asset.type == "rendered-page"]),
        "contactSheets": sheet_paths,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Build the Nature's Nurture PDF asset review library.")
    parser.add_argument("stage", nargs="?", default="all", choices=["all", "extract", "inventory", "contact-sheet"])
    args = parser.parse_args()
    if args.stage == "all":
        result = run_pipeline()
    else:
        result = run_pipeline()
        if args.stage == "extract":
            result["contactSheets"] = []
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
