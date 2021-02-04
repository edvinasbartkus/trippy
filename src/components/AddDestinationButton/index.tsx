import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Plus } from "./plus";

export function AddDestinationButton() {
  return (
    <SearchContainer>
      <PlusContainer>
        <Plus />
      </PlusContainer>
      <Text>Add destination</Text>
    </SearchContainer>
  );
}

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 34px;
`;

const PlusContainer = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 14px;
`;
