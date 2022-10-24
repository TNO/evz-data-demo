import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Data, Locatie } from "../App";
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid';

function FactsheetTable({ locaties }: { locaties: Locatie[] }) {

  const columns: GridColDef[] = [
    { field: 'naam', headerName: 'Locatie', flex: 1 },
    { field: 'gasVerbruik', headerName: 'Gasverbruik (m3)', flex: 1 },
    { field: 'oppervlakte', headerName: 'Oppervlakte (m2)', flex: 1 },
  ]

  const rows: GridRowsProp = locaties.map( (locatie, id) => ({id, ...locatie}) )

  return (
    <div className="h-96 w-full bg-white rounded-xl">
      <DataGrid columns={columns} rows={rows} components={{ Toolbar: GridToolbar }} />
    </div>
  )
}

export function Factsheet({ data }: { data: Data }) {
  return (
    <div className="flex flex-col">
      <FactsheetTable locaties={data.locaties} />
    </div>
  )
}