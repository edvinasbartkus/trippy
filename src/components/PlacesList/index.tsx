import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MapContext } from '../../contexts/MapContext';
import { TripContext } from '../../contexts/TripContext';
import { ActionTypes, Place, RoutingProfile } from '../../reducers/trip';
import { useDirections } from '../AbstractMap/hooks';

export function PlacesList() {
  const { setLatLng, setPlaces } = React.useContext(MapContext);
  const { state } = React.useContext(TripContext);
  const places = state.places;
  const directions = useDirections(places);

  useEffect(() => {
    setPlaces(places)
  }, [places])

  return (
    <Container>
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

type DirectionsControlViewProps = {
  place: Place;
  distance: number;
  duration: number;
}

function DirectionsControlView ({ place, distance = 0, duration = 0 }: DirectionsControlViewProps) {
  const { dispatch } = React.useContext(TripContext);
  const onPress = (profile: RoutingProfile) => () => dispatch({
    type: ActionTypes.UPDATE_PALCE,
    data: {
      place,
      update: { routingProfile: profile },
    },
  })

  return <>
    <Text>Distance: ~{(distance / 1000).toFixed(2)}km</Text>
    <Text>Duration: {(duration / 60).toFixed(2)}min</Text>
    <RoutingProfileContainer>
      {Object.values(RoutingProfile).map(profile => {
        return <TouchableOpacity key={profile} onPress={onPress(profile)}>
          <RoutingProfileText isSelected={place.routingProfile === profile}>{profile}</RoutingProfileText>
        </TouchableOpacity>
      })}
    </RoutingProfileContainer>
    <Text></Text>
  </>
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


const RoutingProfileContainer = styled.View`
  flex-direction: row;
`

interface RoutingProfileTextProps {
  readonly isSelected: boolean;
}

const RoutingProfileText = styled.Text<RoutingProfileTextProps>`
  font-weight: ${props => props.isSelected ? '600' : '300'};
`