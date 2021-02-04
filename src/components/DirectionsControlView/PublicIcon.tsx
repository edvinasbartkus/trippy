import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export function PublicIcon({ color = "#000" }: { color: string }) {
  return (
    <Svg
      width={21}
      height={24}
      viewBox="0 0 21 24"
    >
      <Path
        d="M10.089 0C4.515 0 0 .63 0 5.044v12.611c0 1.116.492 2.106 1.261 2.8V22.7c0 .693.568 1.26 1.261 1.26h1.261c.7 0 1.261-.567 1.261-1.26v-1.262h10.089V22.7a1.26 1.26 0 001.261 1.26h1.261c.694 0 1.261-.567 1.261-1.26v-2.245a3.755 3.755 0 001.261-2.8V5.045C20.177.63 15.663 0 10.09 0zM4.414 18.916a1.89 1.89 0 01-1.892-1.891 1.89 1.89 0 011.892-1.892 1.89 1.89 0 011.891 1.892 1.89 1.89 0 01-1.891 1.891zm11.35 0a1.89 1.89 0 01-1.892-1.891 1.89 1.89 0 011.892-1.892 1.89 1.89 0 011.891 1.892 1.89 1.89 0 01-1.891 1.891zm1.891-7.566H2.522V5.044h15.133v6.306z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  )
}
