import type { CSSProperties, ReactNode } from 'react'
import '../../styles/detail-table.css'

type DetailTableRow = { id: string; values: ReactNode[] }

export function DetailTable({ caption, columns, rows }: { caption: string; columns: string[]; rows: DetailTableRow[] }) {
  return <table className="detail-table" role="table" style={{ '--table-columns': columns.length } as CSSProperties}>
    <caption className="detail-table__visually-hidden">{caption}</caption>
    <thead className="detail-table__visually-hidden" role="rowgroup"><tr role="row">{columns.map((column) => <th key={column} scope="col" role="columnheader">{column}</th>)}</tr></thead>
    <tbody role="rowgroup">{rows.map(({ id, values }) => <tr key={id} role="row">{values.map((value, index) => {
      const content = <><span className="detail-table__label" aria-hidden="true">{columns[index]}</span><span className="detail-table__value">{value}</span></>
      return index === 0 ? <th key={columns[index]} scope="row" role="rowheader">{content}</th> : <td key={columns[index]} role="cell">{content}</td>
    })}</tr>)}</tbody>
  </table>
}
