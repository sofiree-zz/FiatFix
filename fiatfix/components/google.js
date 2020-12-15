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
        d="M12 10.4v3.2h4.526A4.81 4.81 0 0112 16.8 4.806 4.806 0 017.2 12c0-2.646 2.154-4.8 4.8-4.8 1.147 0 2.251.411 3.109 1.158l2.102-2.412A7.928 7.928 0 0012 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8v-1.6h-8z"
        fill="#347AF0"
      />
    </Svg>
  )
}

export default SvgComponent