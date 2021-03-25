import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { RootStackParamList } from '../../App'
import { Plus } from '../components/AddDestinationButton/plus'
import { ButtonInline } from '../components/ButtonInline'
import { TripView } from '../components/TripView'
import { useTrips } from '../helpers/hooks'

const Container = styled.SafeAreaView`
  margin: 10px;
`

const ButtonContainer = styled.TouchableOpacity`
  margin: 10px;
`

const TripsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

export function HomeScreen ({
  navigation
}: {
  navigation: HomeScreenNavigationProp
}): JSX.Element {
  const trips = useTrips()

  return (
    <Container>
      <ButtonContainer onPress={() => navigation.navigate('CreateTrip')}>
        <ButtonInline IconComponent={Plus} label='Create new trip' />
      </ButtonContainer>
      <TripsContainer>
        {trips.map((trip) => {
          return (
            <TripView
              trip={trip}
              key={trip.id}
              onPress={() => {
                navigation.navigate('TripScreen', { trip })
              }}
            />
          )
        })}
      </TripsContainer>
    </Container>
  )
}
