import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { MapsProps } from ".";
import { mapboxToken } from "./config";

const Map = ReactMapboxGl({
  accessToken: mapboxToken
});

export function Maps({ latitude, longitude, children }: MapsProps) {
  return (
    <Map
      center={[longitude, latitude]}
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100%",
      }}
    >
      {children}
    </Map>
  );
}
