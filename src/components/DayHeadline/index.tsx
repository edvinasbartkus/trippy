import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export function DayHeadline() {
  return (
    <DayContainer>
      <Dot />
      <Line colors={['#00b9b6', '#028A9E']}/>
      <DayText>Day 1</DayText>
    </DayContainer>
  );
}

const Dot = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-left: 8px;
  margin-right: 20px;
  background-color: #00b9b6;
`;

const DayContainer = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  padding: 12px 32px;
`;

const Line = styled(LinearGradient)`
  position: absolute;
  left: 44px;
  top: 26px;
  width: 4px;
  height: 16px;
`

const DayText = styled.Text`
  font-weight: 500;
`;
