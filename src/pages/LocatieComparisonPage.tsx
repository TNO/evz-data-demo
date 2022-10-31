import { useState } from "react";
import { HistogramChart } from "../components/charts/HistogramChart";
import { Locatie } from "../interfaces/Routekaart";
import _anoniemeLocaties from "../assets/anoniemeLocaties.json"
import { AnoniemeLocatie } from "../interfaces/AnoniemeLocatie";
import { LocatieFilter } from "../components/filters/LocatieFilter";
import { BubbleChart, BubbleData as BubbleData } from "../components/charts/BubbleChart";

const anoniemeLocaties = _anoniemeLocaties as AnoniemeLocatie[]

interface Props {
  locaties: Locatie[]
}
export function LocatieComparisonPage({ locaties }: Props) {

  const [locatieFilter, setLocatieFilter] = useState<(locatie: Locatie) => boolean>(() => () => true)
  const [anoniemeLocatieFilter, setAnoniemeLocatieFilter] = useState<(anoniemeLocatie: AnoniemeLocatie) => boolean>(() => () => true)

  const filteredLocaties = locaties//.filter(locatieFilter)
  const filteredAnoniemeLocaties = anoniemeLocaties.filter(anoniemeLocatieFilter)

  const bubbleDatas: BubbleData[] = [
    {
      name: "eigen locaties",
      color: "#000000",
      dataXYZ: filteredLocaties.map(locatie => (
        {
          x: locatie.aardgas_equivalent_m3,
          y: locatie.bvo_m2,
          z: locatie.bvo_m2,
        }
      ))
    },
    // {
    //   name: "andere locaties",
    //   color: "#ff0000",
    //   dataXYZ: filteredAnoniemeLocaties.map(anoniemeLocatie => (
    //     {
    //       x: anoniemeLocatie.aardgasEqM3,
    //       y: anoniemeLocatie.bvoM2,
    //       z: anoniemeLocatie.bvoM2,
    //     }
    //   ))
    // }
  ]
  return (
    <div className="flex flex-col">
      <div> Vergelijk locaties </div>
      <div className="w-1/2">
        <LocatieFilter setLocatieFilter={setLocatieFilter} setAnoniemeLocatieFilter={setAnoniemeLocatieFilter} />
      </div>

      <BubbleChart height={200} width={"50%"} bubbleDatas={bubbleDatas} />
      <HistogramChart height={200} width={"50%"} values={filteredAnoniemeLocaties.map(x => x.aardgasEqM3)} />
      <div> Meest voorkomende maatregelen </div>
      <div>  </div>
    </div>
  )
}