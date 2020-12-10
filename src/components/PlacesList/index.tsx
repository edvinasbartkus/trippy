import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { MapContext } from '../../contexts/MapContext';
import { TripContext } from '../../contexts/TripContext';
import { useDirections } from '../AbstractMap/hooks';
import { DirectionsControlView } from '../DirectionsControlView';
import { Link } from '../Router';

export function PlacesList() {
  const { setLatLng, setPlaces } = React.useContext(MapContext);
  const { state: { places } } = React.useContext(TripContext);
  const directions = useDirections(places);

  useEffect(() => {
    setPlaces(places)
  }, [places])

  return (
    <Container>
      <Link to="/search">
        <Text>Search</Text>
      </Link>
      <StyledTitle>List of Places</StyledTitle>
      {places.map((place, idx) => {
        return <StyledPlace key={place.description+idx} onPress={() => setLatLng(place.lat, place.lng)}>
          {directions[idx-1] && <DirectionsControlView place={place} {...directions[idx-1]} />}
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
