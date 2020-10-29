import React from "react";
import { MarkerProps } from ".";
import { Layer, Feature } from "react-mapbox-gl";

export function Marker({ title, coordinates }: MarkerProps) {
  return (
    <Layer type="symbol" id={title} layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[coordinates.longitude, coordinates.latitude]} />
    </Layer>
  );
}
