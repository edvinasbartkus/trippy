import React from 'react'
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

const Container = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #D8D8D8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`

export function SheetBackground() {
  return (
    <Container>
      <Gradient
        locations={[0.0, 0.1, 1.0]}
        colors={["#F5F5F5F2", "#F5F5F5", "#D8D8D8"]}
      />
    </Container>
  );
}
