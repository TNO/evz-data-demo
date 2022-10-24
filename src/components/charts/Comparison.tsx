export {}
// import { Checkbox, FormControlLabel, FormGroup, Slider } from '@mui/material';
// import React, { PureComponent, useState } from 'react';
// import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import anonymous from "../../asssets/anonymous_retrieval.json"
// import { DebouncedSlider } from '../inputs/DebouncedSlider';

// const fakeData = (anonymous
//   .filter(a => a.bvo_m2 !== null)
//   .map((a) => ({
//     x: a.bvo_m2,
//     y: a.aardgas_equivalent_m3,
//     z: a.aardgas_equivalent_m3,
//   }))
// )

// export function Comparison({ data }: { data: Data }) {


//   // const fakeData = [
//   //   { x: 100, y: 100, z: 60 },
//   //   { x: 200, y: 200, z: 240 },
//   //   { x: 300, y: 300, z: 60 },
//   // ]

//   const [value, setValue] = React.useState<number[]>([0, 100_000]);

//   const filteredData = fakeData.filter(d => (value[0] <= d.z) && (d.z <= value[1]))

//   return (
//     <>
//       <FormGroup >
//         <FormControlLabel checked control={<Checkbox />} label="GGZ" />
//         <FormControlLabel checked control={<Checkbox />} label="V&V" />
//       </FormGroup>
//       <DebouncedSlider
//         min={0}
//         max={100_000}
//         debouncedValue={value}
//         setDebouncedValue={setValue}
//         valueLabelDisplay="auto"
//         disableSwap
//       />
//       <ResponsiveContainer width="90%" height={400}>
//         <ScatterChart
//           margin={{
//             top: 0,
//             right: 0,
//             bottom: 0,
//             left: 0,
//           }}
//         >
//           <CartesianGrid />
//           <XAxis type="number" dataKey="x" name="gas (m3)" />
//           <YAxis type="number" dataKey="y" name="oppvlakte (m2)" />
//           <ZAxis type="number" dataKey="z" name="score (m3)" range={[5, 100]} />
//           <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//           <Scatter name="Other" data={filteredData} fill="#005f55" opacity={0.5} />
//         </ScatterChart>
//       </ResponsiveContainer>
//       <div> {JSON.stringify(filteredData.length)} </div>
//       <div > hi? </div>
//       <Histogram />
//     </>
//   )
// }
