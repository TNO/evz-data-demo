import { Maatregel } from "../interfaces/Routekaart"
import _anoniemeMaatregelen from "../assets/anoniemeMaatregelen.json"
import _anoniemeLocaties from "../assets/anoniemeLocaties.json"

import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from "@mui/x-data-grid"
import { AnoniemeLocatie } from "../interfaces/AnoniemeLocatie"
interface AnoniemeMaatregel {
  beschrijving: string
  co2ReductieTon: number
}
const anoniemeMaatregelen = _anoniemeMaatregelen as AnoniemeMaatregel[]
const anoniemeLocaties = _anoniemeLocaties as AnoniemeLocatie[]

type AnoniemeMaatregelCount = { beschrijving: string, natuurlijkMoment: boolean, count: number }
const anoniemeMaatregelCount: AnoniemeMaatregelCount[] = []
anoniemeMaatregelen.forEach(anoniemeMaatregel => {
  const row = anoniemeMaatregelCount.find(x => anoniemeMaatregel.beschrijving === x.beschrijving)
  if (!row) {
    anoniemeMaatregelCount.push({
      beschrijving: anoniemeMaatregel.beschrijving,
      count: 1,
      natuurlijkMoment: false,
    })
    console.log('...')
    return
  }

  row.count += 1
})

interface Props {
  maatregelen: Maatregel[]
}
export function MaatregelComparisonPage({ maatregelen }: Props) {

  return (
    <div className="flex flex-col">
      < MaatregelOverviewTable anoniemeMaatregelCount={anoniemeMaatregelCount} />
      {/* {JSON.stringify(anoniemeMaatregelCount, undefined, 4)} */}
    </div>
  )
}

function MaatregelOverviewTable({ anoniemeMaatregelCount }: { anoniemeMaatregelCount: AnoniemeMaatregelCount[] }) {

  const rows = anoniemeMaatregelCount.map((x) => (
    {
      "beschrijving": x.beschrijving,
      "natuurlijkMoment": x.natuurlijkMoment,
      "count": x.count,
      "percentage": (x.count / anoniemeLocaties.length * 100).toFixed(2) + " %"
      // "locaties al gedaan": maatregelen.filter(maatregel => (
      //   maatregel.
      //   )
      // ),
    }
  ))

  const keys = Object.keys(rows[0])
  const gridColumns: GridColDef[] = keys.map(key => ({ field: key, headerName: key, flex: 1 }))
  const gridRows: GridRowsProp = rows.map((row, id) => ({ id, ...row }))
  return (
    <div className="h-96 w-full bg-white rounded-xl">
      <DataGrid columns={gridColumns} rows={gridRows} components={{ Toolbar: GridToolbar }} />
    </div>
  )
}