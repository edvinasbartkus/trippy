import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { MapContext } from "../../contexts/MapContext";
import polyline from "@mapbox/polyline";
import { useDirections } from "./hooks";

export function Maps() {
  const mapContext = React.useContext(MapContext);
  const { lat, lng, places } = mapContext;
  const directions = useDirections(places);
  const region = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  return (
    <MapView region={region} style={styles.view}>
      {places.map((place, idx) => {
        return (
          <Marker
            key={place.description + idx}
            coordinate={{ latitude: place.lat, longitude: place.lng }}
            title={place.description}
          />
        );
      })}
      {directions.map((direction) => (
        <Polyline
          key={direction}
          coordinates={polyline
            .decode(direction)
            .map(([latitude, longitude]) => ({ latitude, longitude }))}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
