import React from 'react'
import styled from 'styled-components/native'
import { Trip } from '../../models'

const Container = styled.TouchableOpacity`
  width: 50%;
`

const SubContainer = styled.View`
  background-color: white;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  height: 80px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.10);
`

const Title = styled.Text`
  font-weight: 600;
`

interface TripViewProps {
  trip: Trip
  onPress: () => void
}

export function TripView ({ trip, onPress }: TripViewProps): JSX.Element {
  return (
    <Container onPress={onPress}>
      <SubContainer>
        <Title>{trip.name}</Title>
      </SubContainer>
    </Container>
  )
}
