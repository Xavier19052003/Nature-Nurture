"""Create static WebP derivatives without cropping or changing source artwork.

Run with Pillow installed. Existing source files remain untouched.
"""
import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / "public-production"
manifest = {}
totals = {"original_bytes": 0, "derivative_bytes": 0, "images": 0}
references = "\n".join(path.read_text(encoding="utf-8") for path in (ROOT / "src").rglob("*") if path.suffix in {".ts", ".tsx", ".css"})

for source in sorted(PUBLIC.rglob("*")):
    if source.suffix.lower() not in {".png", ".jpg", ".jpeg"} or source.stat().st_size < 80000:
        continue
    relative = source.relative_to(PUBLIC).as_posix()
    if source.stem not in references:
        continue
    # These groups already have responsive WebP deliveries, or need exact logo treatment.
    if relative.startswith(("branding/", "quality/accreditations/", "products/zingo/approved/")):
        continue
    if relative.startswith("products/sublingual/") and len(Path(relative).parts) > 3:
        continue
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        width, height = image.size
        maximum = min(width, 1920 if width / height > 1.2 else 1280)
        widths = sorted({maximum, *(w for w in (480, 800, 1200) if w < maximum)})
        variants = []
        for target in widths:
            output = source.with_suffix(".webp") if target == maximum else source.with_name(f"{source.stem}-{target}.webp")
            resized = image.resize((target, round(height * target / width)), Image.Resampling.LANCZOS) if target != width else image
            resized.save(output, "WEBP", quality=86, method=6)
            totals["derivative_bytes"] += output.stat().st_size
            variants.append({"width": target, "src": output.relative_to(PUBLIC).as_posix()})
        manifest[relative] = {"width": width, "height": height, "variants": variants}
        totals["original_bytes"] += source.stat().st_size
        totals["images"] += 1

(ROOT / "src/data/imageAssets.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print(json.dumps(totals, indent=2))
