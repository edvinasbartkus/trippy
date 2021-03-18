import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export function AppBackground({ children }) {
  return (
    <Container>
      <LinearGradient locations={[0, 1]} colors={["#F5F5F5", "#D8D8D8"]}>
        {children}
      </LinearGradient>
    </Container>
  );
}
