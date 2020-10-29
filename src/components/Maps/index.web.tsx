import React from "react";
import ReactMapboxGl, { Feature, GeoJSONLayer, Layer } from "react-mapbox-gl";
import { MapContext } from "../../contexts/MapContext";
import polyline from "@mapbox/polyline";
import { mapboxToken } from "./config";
import { useDirections } from "./hooks";

const Map = ReactMapboxGl({
  accessToken: mapboxToken
});

export function Maps() {
  const { lat, lng, places } = React.useContext(MapContext);
  const directions = useDirections(places);

  console.log(directions);

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
      {directions.map(direction => <GeoJSONLayer
        key={direction}
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
            coordinates: polyline
              .decode(
                direction
              )
              .map((it) => it.reverse()),
          },
        }}
      />)}
    </Map>
  );
}
