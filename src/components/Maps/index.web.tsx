import React from "react";
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";
import { MapContext } from "../../contexts/MapContext";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZWR2aW5hc2JhcnRrdXMiLCJhIjoiY2s2djV3bHd0MGcxMzNta2h6MmFrbjVpcyJ9.zxKeJrSWjbOleW3MUBwh0g",
});

export function Maps() {
  const { lat, lng, places } = React.useContext(MapContext);

  return (
    <Map
      center={[lng, lat]}
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100%",
      }}
    >
      {places.map((place, idx) => {
        return (
          <Layer
            key={place.description + idx}
            type="symbol"
            id={place.description}
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[place.lng, place.lat]} />
          </Layer>
        );
      })}
    </Map>
  );
}
