import { Routekaart } from "../interfaces/Routekaart";
import { UploadJSONButton } from "./inputs/UploadJSONButton";

interface Props {
  routekaart?: Routekaart
  setRoutekaart: (routekaart: Routekaart) => void 
}
export function UploadRoutekaartComponent({routekaart, setRoutekaart}: Props) {

  return (
    <div className="text-right">
      <div className="">
      <UploadJSONButton text="upload routekaart" onUploaded={(object: any) => setRoutekaart(object as Routekaart)} />
      </div>
      <div className="mt-5 text-2xl text-right font-bold break-words"> 
        {routekaart ? <div>{routekaart.instelling_naam}</div> : <div></div> }
       </div>

    </div>
  )
}
