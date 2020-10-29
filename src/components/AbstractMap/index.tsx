import React from "react";
import { Maps } from '../Maps';
import { MapContext } from "../../contexts/MapContext";
import { useDirections } from "../Maps/hooks";
import { Marker } from "../Marker";
import { Directions } from "../Directions";

export function AbstractMap() {
  const mapContext = React.useContext(MapContext);
  const { lat, lng, places } = mapContext;
  const directions = useDirections(places);

  return (
    <Maps latitude={lat} longitude={lng}>
      {places.map((place, idx) => {
        return (
          <Marker
            key={place.description + idx}
            coordinates={{ latitude: place.lat, longitude: place.lng }}
            title={place.description}
          />
        );
      })}
      {directions.map((route) => {
        return <Directions key={route} polyline={route} />;
      })}
    </Maps>
  );
}
