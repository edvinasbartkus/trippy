import React from "react";
import { View } from "react-native";
import { Maps } from "../components/Maps";
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
        <Maps />
        <View>
          <TripContext.Provider value={{state, dispatch}}>
            <PlacesList />
            <PlaceSearch />
          </TripContext.Provider>
        </View>
      </SplitView>
    </MapContextContainer>
  );
}

