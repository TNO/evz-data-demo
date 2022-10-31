import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const bin = (values: number[], numBins: number) => {

  const minVal = Math.min(...values)
  const maxVal = Math.max(...values)

  const binSize = (maxVal - minVal) / numBins
  const sortedValues = [...values].sort()

  let results = []
  for (let i = 0; i < numBins; i++) {
    const left = i * binSize
    const right = (i + 1) * binSize
    const valuesInBin = sortedValues.filter(value => left <= value && value <= right)
    results.push({
      left: left,
      right: right,
      center: (left + right) / 2,
      values: valuesInBin,
      count: valuesInBin.length,
    })
  }
  return results
}

interface Props {
  values: number[]
  height: number | string 
  width: number | string 
}
export function HistogramChart( {height, width, values}: Props ) {

  const binned = bin(values, 30)
  return (
    <ResponsiveContainer width={width} height={height}>

      <BarChart data={binned}>
        <XAxis name="gas (m3)" dataKey="center" />
        <YAxis name="oppvlakte (m2)" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
     </ResponsiveContainer>
  )
}
