import React from "react";
import { Polyline } from "react-native-maps";

export type DirectionsProps = {
  coordinates: number[][];
}

export function Directions({ coordinates }: DirectionsProps) {
  return <Polyline
    coordinates={coordinates
      .map(([latitude, longitude]) => ({ latitude, longitude }))}
  />;
}
