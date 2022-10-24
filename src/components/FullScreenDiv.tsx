import React, { CSSProperties } from "react"

interface FullScreenDivProps extends React.HTMLProps<HTMLDivElement> {
  fullScreenSize: number
}
export function FullScreenDiv({ fullScreenSize, ...props }: FullScreenDivProps) {

  const [isFullScreen, setIsFullScreen] = React.useState(false)

  const fullScreenProps: CSSProperties = isFullScreen ? {
    position: "absolute", 
    width: "90vw",
    height: "90vh",
  } : {position: "relative"}
  return (
    <div {...props} 
    style={{...fullScreenProps}}>
      <button
        className="absolute top-0 right-0"
        onClick={() => setIsFullScreen(prev => !prev)}
      > enlarge! </button>

      {props.children}
    </div>
  )
}