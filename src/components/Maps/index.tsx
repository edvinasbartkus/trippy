import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapContext } from "../../contexts/MapContext";

export function Maps() {
  const mapContext = React.useContext(MapContext);
  const { lat, lng, places } = mapContext;
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
