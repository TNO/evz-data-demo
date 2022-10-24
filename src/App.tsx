// import { useEffect, useState } from "react";
// import { Comparison } from "./components/charts/Comparison";
// import { Factsheet } from "./components/Factsheet";
// import { UploadJSONButton } from "./components/inputs/UploadJSONButton";
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { UploadRoutekaartComponent } from "./components/UploadRoutekaartComponent";
import { Routekaart } from "./interfaces/Routekaart";
import { ComparisonPage } from "./pages/ComparisonPage";
import { FactsheetPage } from "./pages/FactsheetPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {

  const [routekaart, setRoutekaart] = React.useState<Routekaart>()

  const uploadRoutekaartComponent = <UploadRoutekaartComponent routekaart={routekaart} setRoutekaart={setRoutekaart} />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout uploadRoutekaartComponent={uploadRoutekaartComponent} />}>

          {
            routekaart ?
              (
                <>
                  <Route index element={<FactsheetPage routekaart={routekaart} />} />
                  <Route path="/vergelijk" element={<ComparisonPage routekaart={routekaart} />} />
                  <Route path="*" element={<NotFoundPage />} />
                </>
              )
              :
              (
                <>
                  <Route index element={<div>upload een routekaart</div>} />
                  <Route path="*" element={<div>upload een routekaart</div>} />
                </>
              )
          }

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

interface LayoutProps {
  uploadRoutekaartComponent: JSX.Element
}

function Layout({ uploadRoutekaartComponent }: LayoutProps) {
  return (
    <div className="h-screen flex">
      <div className="h-screen w-96 bg-blue-200 p-2">

        <div className="relative h-full flex flex-col items-end">
          <div className="absolute items-end h-full justify-center flex flex-col gap-2 items-end w-full">
            <NavButtons />
          </div>
          {uploadRoutekaartComponent}
        </div>
      </div>
      <div className="h-screen w-full bg-blue-100 p-2">
        <Outlet />
      </div>
    </div>
  )
}

interface UploadRoutekaartProps {
  routekaart?: Routekaart
  setRoutekaart: (routekaart: Routekaart) => void
}

export function NavButtons() {

  type Link = { name: string, route: string, disabledWithoutRoutekaart?: boolean }
  const links: Link[] = [
    { name: "Factsheet", route: "/", disabledWithoutRoutekaart: true },
    { name: "Update routekaart", route: "/edit" },
    { name: "Vergelijk uw routekaart", route: "vergelijk", disabledWithoutRoutekaart: true },
  ]
  const [currentLink, setCurrentLink] = React.useState(links[0])

  const navigate = useNavigate()

  const buttons = links.map( (link, idx) => {
    const isSelected = link.name === currentLink.name
    return (
      <Button
        className={isSelected ? "opacity-100" : "opacity-60"}
        variant="contained"
        key={idx}
        onClick={() => {
          navigate(link.route)
          setCurrentLink(link)
        }}
      >
        {link.name}
      </Button>
    )
  })

  return <>{buttons}</>
}