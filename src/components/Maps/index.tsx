import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export type MapsProps = {
  latitude: number;
  longitude: number;
  children: React.ReactNode[];
}

export function Maps({ latitude, longitude, children }: MapsProps) {
  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  return (
    <MapView region={region} style={styles.view}>
      {children}
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
