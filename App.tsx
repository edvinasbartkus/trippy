import React from 'react';
import { AppBackground } from './src/components/AppBackground';
import { HomeScreen } from './src/screens/HomeScreen';
import { TripScreen } from './src/screens/TripScreen';

export default function App() {
  return (
    <AppBackground>
      <HomeScreen />
    </AppBackground>
  );
}