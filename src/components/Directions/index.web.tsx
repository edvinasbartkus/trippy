import React from "react";
import { GeoJSONLayer } from "react-mapbox-gl";
import polylineDecoder from "@mapbox/polyline";
import { DirectionsProps } from ".";

export function Directions({ polyline }: DirectionsProps) {
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
          coordinates: polylineDecoder
            .decode(polyline)
            .map((it) => it.reverse()),
        },
      }}
    />
  );
}
