import React from "react";
import { View } from "react-native";
import { Maps } from "../components/Maps";
import { PlaceSearch } from "../components/PlaceSearch";
import { PlacesList } from "../components/PlacesList";
import { SplitView } from "../components/SplitView/index";
import { MapContextContainer } from "../containers/MapContextContainer";

const PLACES = [
  {title: 'Vilnius', lat: 54.658145, lng: 25.2086729},
  {title: 'London', lat: 51.5285582, lng: -0.241678}
]

export function TripScreen() {
  return (
    <MapContextContainer>
      <SplitView>
        <Maps />
        <View>
          <PlacesList places={PLACES} />
          <PlaceSearch />
        </View>
      </SplitView>
    </MapContextContainer>
  );
}

