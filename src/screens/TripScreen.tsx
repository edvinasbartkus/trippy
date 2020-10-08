import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { Maps } from "../components/Maps";
import styled from "styled-components/native";
import { MapContext } from "../contexts/MapContext";
import { MapContextContainer } from "../containers/MapContextContainer";

const Container = styled.View`
  flex: 1;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
`;

const Left = styled.View`
  width: ${props => props.mobile ? '100%' : '50%'};
  height: ${props => props.mobile ? '90%' : '100%'};
`;

const Right = styled.View`
  width: ${props => props.mobile ? '100%' : '50%'};
  height: ${props => props.mobile ? '90%' : '100%'};
`;

export function TripScreen() {
  const isMobile = Platform.OS !== 'web'
  return (
    <MapContextContainer>
      <Container mobile={isMobile}>
        <Left mobile={isMobile}>
          <Maps />
        </Left>
        <Right mobile={isMobile}>
          <ListOfPlaces />
        </Right>
      </Container>
    </MapContextContainer>
  );
}

function ListOfPlaces() {
  const { setLatLng } = React.useContext(MapContext)
 
  return (
    <View>
      <Text>List of Places</Text>
      <TouchableOpacity onPress={() => setLatLng(54.658145, 25.2086729)}>
        <Text>Vilnius</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLatLng(51.5285582, -0.241678)}>
        <Text>London</Text>
      </TouchableOpacity>
    </View>
  );
}
