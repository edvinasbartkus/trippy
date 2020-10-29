import React from "react";
import { Marker as MapsMarker } from "react-native-maps";

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type MarkerProps = {
  coordinates: Coordinates;
  title: string;
};

export function Marker({ coordinates, title }: MarkerProps) {
  return (
    <MapsMarker
      coordinate={{
        ...coordinates,
      }}
      title={title}
    />
  );
}
