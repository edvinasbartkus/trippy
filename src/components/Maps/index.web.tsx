import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { MapContext } from "../../contexts/MapContext";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZWR2aW5hc2JhcnRrdXMiLCJhIjoiY2s2djV3bHd0MGcxMzNta2h6MmFrbjVpcyJ9.zxKeJrSWjbOleW3MUBwh0g",
});

export function Maps() {
  const mapContext = React.useContext(MapContext);

  return (
    <Map
      center={[mapContext.lng, mapContext.lat]}
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100%",
      }}
    />
  );
}
