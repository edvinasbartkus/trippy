import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { MapContext } from '../../contexts/MapContext';
import { TripContext } from '../../contexts/TripContext';


type Place = {
  title: string;
  lat: number;
  lng: number;
}

export function PlacesList() {
  const { setLatLng, setPlaces } = React.useContext(MapContext);
  const { state } = React.useContext(TripContext);
  const places = state.places;

  useEffect(() => {
    setPlaces(places)
  }, [places])

  return (
    <Container>
      <StyledTitle>List of Places</StyledTitle>
      {places.map((place, idx) => {
        return <StyledPlace key={place.description+idx} onPress={() => setLatLng(place.lat, place.lng)}>
          <Text>{place.description}</Text>
        </StyledPlace>
      })}
    </Container>
  );
}

const Container = styled.View`
  padding-bottom: 5px;
`

const StyledTitle = styled.Text`
  padding: 10px 10px 5px 10px;
  font-weight: 600;
`

const StyledPlace = styled.TouchableOpacity`
  padding: 5px 10px 5px 10px;
`
