import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={134}
      height={5}
      viewBox="0 0 134 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={134} height={5} rx={2.5} fill="#333" />
    </Svg>
  )
}

export default SvgComponent
