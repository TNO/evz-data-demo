import { CartesianGrid, Label, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts"

export type BubbleData = {
  name: string
  color: string
  opacity: number
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
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="gas (m3)" >
          <Label
            value={"Bruto vloeroppervlakte (m2)"} position="bottom" offset={-10} />
        </XAxis>
        <YAxis type="number" dataKey="y" name="oppvlakte (m2)" label={<div>hellooo</div>}>
        </YAxis>
        {/* <ZAxis type="number" dataKey="z" name="score (m3)" range={[5, 100]} /> */}
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        {bubbleDatas.map((bubbleData, idx) => (
          <Scatter key={idx} name={bubbleData.name} data={bubbleData.dataXYZ} fill={bubbleData.color} opacity={bubbleData.opacity} />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  )
}