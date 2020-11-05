import React from "react";
import { GeoJSONLayer } from "react-mapbox-gl";
import { DirectionsProps } from ".";

export function Directions({ coordinates }: DirectionsProps) {
  return (
    <GeoJSONLayer
      lineLayout={{ "line-cap": "round" }}
      linePaint={{
        "line-color": "black",
        "line-width": 3.0,
      }}
      data={{
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinates.map((it) => [...it].reverse()),
        },
      }}
    />
  );
}
