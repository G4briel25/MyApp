import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const MesaIcone = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#1C1B1F"
        d="M4.2 9.096h15.6l-.917-3.192H5.143L4.2 9.096Zm12.706 1.5H7.109l-.313 2.365h10.417l-.307-2.365ZM4.525 18.673l1.094-8.077H3.327a.774.774 0 0 1-.658-.332.821.821 0 0 1-.138-.731l1.3-4.53a.85.85 0 0 1 .292-.442.75.75 0 0 1 .504-.157h14.756a.79.79 0 0 1 .504.166.85.85 0 0 1 .292.443l1.3 4.52a.821.821 0 0 1-.139.73.774.774 0 0 1-.657.333h-2.287l1.079 8.077a.728.728 0 0 1-.175.586.693.693 0 0 1-.55.25.75.75 0 0 1-.494-.18.711.711 0 0 1-.256-.458l-.588-4.41H6.588L6 18.881a.693.693 0 0 1-.256.453.762.762 0 0 1-.494.175.693.693 0 0 1-.55-.25.728.728 0 0 1-.175-.586Z"
      />
    </G>
  </Svg>
)
export default MesaIcone