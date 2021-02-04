import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

export function AddDestinationButton() {
  return (
    <SearchContainer>
      <Img source={require("../../icons/plus.png")} />
      <Text>Add destination</Text>
    </SearchContainer>
  );
}

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 34px;
`;

const Img = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 14px;
`;
