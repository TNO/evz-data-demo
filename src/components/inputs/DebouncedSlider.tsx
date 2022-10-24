import { Slider, SliderProps } from "@mui/material"
import { useState } from "react"

interface DebouncedSliderProps extends SliderProps {
  debouncedValue: number[]
  setDebouncedValue: (value: number[]) => void
}
export const DebouncedSlider = (props: DebouncedSliderProps) => {

  const { debouncedValue, setDebouncedValue, ...sliderProps } = props

  const [value, setValue] = useState<number[]>(debouncedValue)

  const [timerId, setTimerId] = useState<any>(null)

  // const handleChange = (event: Event, value: number[]) => {
  //   timerId && clearTimeout(timerId);
  //   setTimerId(setTimeout(() => {
  //     console.log('change');
  //     setDebouncedValue(value);
  //   }, 500)
  //   )
  // };

  return <Slider
    {...sliderProps}
    value={value}
    onChange={(event, value) => {
      if (typeof value === "number") return 
      setValue(value)
      // setDebouncedValue(value)
      // handleChange(event, value)
    }
    }
    onChangeCommitted={(event, value) => {
      if (typeof value === "number") return 
      setDebouncedValue(value)
    }}
  />
}