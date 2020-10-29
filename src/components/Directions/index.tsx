import React from "react";
import { Polyline } from "react-native-maps";
import polylineDecoder from "@mapbox/polyline";

export type DirectionsProps = {
  polyline: string;
}

export function Directions({ polyline }: DirectionsProps) {
  return <Polyline
    coordinates={polylineDecoder
      .decode(polyline)
      .map(([latitude, longitude]) => ({ latitude, longitude }))}
  />;
}
