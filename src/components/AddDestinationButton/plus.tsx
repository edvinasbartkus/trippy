import React from "react";
import Svg, { G, Path } from 'react-native-svg';

export function Plus ({ color = "#ED2E2E" }: { color?: string }) {
  return <Svg width="24px" height="24px" viewBox="0 0 24 24">
      <G id="App-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <G id="iPhone-12" transform="translate(-34.000000, -563.000000)" fill={color} fillRule="nonzero">
              <G id="plus" transform="translate(34.000000, 563.000000)">
                  <Path d="M12,0 C5.373,0 0,5.373 0,12 C0,18.627 5.373,24 12,24 C18.627,24 24,18.627 24,12 C24,5.373 18.627,0 12,0 Z M18,13 L13,13 L13,18 L11,18 L11,13 L6,13 L6,11 L11,11 L11,6 L13,6 L13,11 L18,11 L18,13 Z" id="Shape"></Path>
              </G>
          </G>
      </G>
  </Svg>
}
