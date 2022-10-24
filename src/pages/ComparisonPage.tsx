import { Histogram } from "../components/charts/Histogram";
import { Routekaart } from "../interfaces/Routekaart";

export function ComparisonPage({routekaart}: {routekaart: Routekaart}) {
  
  return (
    <div className="flex flex-col">
      <div> Vergelijk locaties </div>
      <Histogram height={200} width={"50%"} values={ [0, 1, 0.5, 2, 5, 10, 20, 50]}/>  
    </div>
  )
}