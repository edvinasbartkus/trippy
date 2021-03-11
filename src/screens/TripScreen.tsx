import React from "react";
import { ScrollView } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { AbstractMap } from "../components/AbstractMap";
import Auth from "../components/Auth";
import { PlaceSearch } from "../components/PlaceSearch";
import { PlacesList } from "../components/PlacesList";
import { Route, Router } from "../components/Router";
import { SplitView } from "../components/SplitView/index";
import { MapContextContainer } from "../containers/MapContextContainer";
import { TripContext } from "../contexts/TripContext";
import { theme } from "../helpers/theme";
import { Action, initialState, tripReducer } from "../reducers/trip";

const StyledSafeView = styled.SafeAreaView`
  flex: 1;
`;

export function TripScreen() {
  const [state, dispatch] = React.useReducer(tripReducer, initialState);

  const dispatchWithLogging = (action: Action) => {
    console.log("Dispatched", action);
    dispatch(action);
  };

  return <Auth />

  return (
    <ThemeProvider theme={theme}>
      <MapContextContainer>
        <SplitView>
          <AbstractMap />
          <StyledSafeView>
            <ScrollView>
              <TripContext.Provider
                value={{ state, dispatch: dispatchWithLogging }}
              >
                <Router>
                  <Route exact path="/" component={PlacesList} />
                  <Route path="/search" component={PlaceSearch} />
                </Router>
              </TripContext.Provider>
            </ScrollView>
          </StyledSafeView>
        </SplitView>
      </MapContextContainer>
    </ThemeProvider>
  );
}
