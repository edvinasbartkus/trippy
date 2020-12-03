import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { AbstractMap } from "../components/AbstractMap";
import { PlaceSearch } from "../components/PlaceSearch";
import { PlacesList } from "../components/PlacesList";
import { SplitView } from "../components/SplitView/index";
import { MapContextContainer } from "../containers/MapContextContainer";
import { TripContext } from "../contexts/TripContext";
import { initialState, tripReducer } from "../reducers/trip";

export function TripScreen() {
  const [state, dispatch] = React.useReducer(tripReducer, initialState)
  return (
    <MapContextContainer>
      <SplitView>
        <AbstractMap />
        <SafeAreaView>
          <ScrollView>
            <TripContext.Provider value={{state, dispatch}}>
              <PlacesList />
              <PlaceSearch />
            </TripContext.Provider>
          </ScrollView>
        </SafeAreaView>
      </SplitView>
    </MapContextContainer>
  );
}
