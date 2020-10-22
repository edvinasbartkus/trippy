import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { MapContext } from '../../contexts/MapContext';

type Place = {
  title: string;
  lat: number;
  lng: number;
}

type PlacesListProps = {
  places: Place[]
}

export function PlacesList({ places }: PlacesListProps) {
  const { setLatLng } = React.useContext(MapContext);

  return (
    <Container>
      <StyledTitle>List of Places</StyledTitle>
      {places.map((place, idx) => {
        return <StyledPlace key={place.title+idx} onPress={() => setLatLng(place.lat, place.lng)}>
          <Text>{place.title}</Text>
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
