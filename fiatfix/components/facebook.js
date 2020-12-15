import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.625 9.188v-2.25c0-.622.504-1.125 1.125-1.125h1.125V3h-2.25A3.375 3.375 0 009.25 6.375v2.813H7V12h2.25v9h3.375v-9h2.25L16 9.187h-3.375z"
        fill="#347AF0"
      />
    </Svg>
  )
}

export default SvgComponent
