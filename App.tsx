import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { CreateTripScreen } from './src/screens/CreateTripScreen'
import { HomeScreen } from './src/screens/HomeScreen'
import { TripScreen } from './src/screens/TripScreen'
import { Trip } from './src/models'

export type RootStackParamList = {
  Home: undefined
  CreateTrip: undefined
  TripScreen: { trip: Trip }
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App (): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name='CreateTrip'
          component={CreateTripScreen}
          options={{ cardOverlayEnabled: true, cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS }}
        />
        <Stack.Screen
          name='TripScreen'
          component={TripScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
