import React from "react";
import {
  Platform
} from "react-native";
import styled from "styled-components/native";
import { Maps } from "../components/Maps";
import { PlaceSearch } from "../components/PlaceSearch";
import { PlacesList } from "../components/PlacesList";
import { MapContextContainer } from "../containers/MapContextContainer";

type ComponentWithMobileProp = {
  mobile: boolean;
};

const Container = styled.View`
  flex: 1;
  flex-direction: ${(props: ComponentWithMobileProp) =>
    props.mobile ? "column" : "row"};
`;

const Left = styled.View`
  width: ${(props: ComponentWithMobileProp) => (props.mobile ? "100%" : "50%")};
  height: ${(props: ComponentWithMobileProp) =>
    props.mobile ? "90%" : "100%"};
`;

const Right = styled.View`
  width: ${(props: ComponentWithMobileProp) => (props.mobile ? "100%" : "50%")};
  height: ${(props: ComponentWithMobileProp) =>
    props.mobile ? "90%" : "100%"};
`;

const PLACES = [
  {title: 'Vilnius', lat: 54.658145, lng: 25.2086729},
  {title: 'London', lat: 51.5285582, lng: -0.241678}
]

export function TripScreen() {
  const isMobile = Platform.OS !== "web";
  return (
    <MapContextContainer>
      <Container mobile={isMobile}>
        <Left mobile={isMobile}>
          <Maps />
        </Left>
        <Right mobile={isMobile}>
          <PlacesList places={PLACES} />
          <PlaceSearch />
        </Right>
      </Container>
    </MapContextContainer>
  );
}

