import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnoniemeLocatie } from "../../interfaces/AnoniemeLocatie";
import { Locatie } from "../../interfaces/Routekaart";
import { DebouncedSlider } from "../inputs/DebouncedSlider";

interface Props {
  setLocatieFilter: React.Dispatch<React.SetStateAction<(locatie: Locatie) => boolean>>
  setAnoniemeLocatieFilter: React.Dispatch<React.SetStateAction<(anoniemeLocatie: AnoniemeLocatie) => boolean>>
}
export function LocatieFilter({ setLocatieFilter, setAnoniemeLocatieFilter }: Props) {

  const MIN_BVO = 0
  const MAX_BVO = 100_000
  const [bvoRange, setBvoRange] = useState<number[]>([MIN_BVO, MAX_BVO]);

  useEffect( () => {
    setLocatieFilter( () => (locatie: Locatie) => {
      const isWithinRange = (bvoRange[0] <= locatie.bvo_m2) && (locatie.bvo_m2 <= bvoRange[1])
      console.log(isWithinRange, locatie.bvo_m2 )
      return isWithinRange
    })

    setAnoniemeLocatieFilter( () => (anoniemeLocatie: AnoniemeLocatie) => {
      const isWithinRange = (bvoRange[0] <= anoniemeLocatie.bvoM2) && (anoniemeLocatie.bvoM2 <= bvoRange[1])
      return isWithinRange
    })
  }, [bvoRange])

  
  return (
    <div>
      <>
        <FormGroup >
          <FormControlLabel checked control={<Checkbox />} label="GGZ" />
          <FormControlLabel checked control={<Checkbox />} label="V&V" />
        </FormGroup>
      <div> filter op bruto vloeroppervlak </div>
        <DebouncedSlider
          min={MIN_BVO}
          max={MAX_BVO}
          debouncedValue={bvoRange}
          setDebouncedValue={setBvoRange}
          valueLabelDisplay="auto"
          disableSwap
        />
      </>
    </div>
  )
}