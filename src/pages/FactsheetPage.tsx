import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import React from "react";
import { Locatie, Routekaart } from "../interfaces/Routekaart";

function LocatieOverviewTable({ locaties }: { locaties: Locatie[] }) {

  type CustomRow = any // {headerName: string, value: any}

  const rows: GridRowsProp = locaties.map((locatie, id) => (
    {
      id,
      naam: locatie.locatie_naam,
      "bouwjaar": locatie.bouwjaar,
      "gasverbruik (m3)": locatie.aardgas_equivalent_m3,
      "bvo (m2)": locatie.bvo_m2,
      "gasvebruik/bvo (m3/m2)": (locatie.aardgas_equivalent_m3 / locatie.bvo_m2).toFixed(2),
    }
  ))

  const keys = Object.keys(rows[0])
  const columns: GridColDef[] = keys.map( key => ({field: key, headerName: key, flex: 1}))

  return (
    <div className="h-96 w-full bg-white rounded-xl">
      <DataGrid columns={columns} rows={rows} components={{ Toolbar: GridToolbar }} />
    </div>
  )
}

export function FactsheetPage({ routekaart }: { routekaart: Routekaart }) {

  return (
    <div className="flex">
      <LocatieOverviewTable locaties={routekaart.locaties} />
    </div>
  )
}