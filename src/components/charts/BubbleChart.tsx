import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts"

export type BubbleData = {
  name: string
  color: string 
  dataXYZ: {
    x: number
    y: number
    z: number
  }[]
}

interface Props {
  height: number | string
  width: number | string
  bubbleDatas: BubbleData[]
}
export function BubbleChart({ height, width, bubbleDatas }: Props) {

  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="gas (m3)" />
        <YAxis type="number" dataKey="y" name="oppvlakte (m2)" />
        <ZAxis type="number" dataKey="z" name="score (m3)" range={[5, 100]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        { bubbleDatas.map( (bubbleData, idx) => (
          <Scatter key={idx} name={bubbleData.name} data={bubbleData.dataXYZ} fill={bubbleData.color} opacity={0.5} />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  )
}