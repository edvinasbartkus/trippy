import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { TripContext } from '../../contexts/TripContext';
import { RoutingProfile, ActionTypes, Place } from '../../reducers/trip';

type DirectionsControlViewProps = {
  place: Place;
  distance: number;
  duration: number;
}

export function DirectionsControlView ({ place, distance = 0, duration = 0 }: DirectionsControlViewProps) {
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

const RoutingProfileContainer = styled.View`
  flex-direction: row;
`

interface RoutingProfileTextProps {
  readonly isSelected: boolean;
}

const RoutingProfileText = styled.Text<RoutingProfileTextProps>`
  font-weight: ${props => props.isSelected ? '600' : '300'};
`
