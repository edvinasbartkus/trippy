import React from "react";
import { ButtonInline } from "../ButtonInline";
import styled from 'styled-components/native'
import { Plus } from "./plus";

export function AddDestinationButton() {
  return <Container>
    <ButtonInline IconComponent={Plus} label="Add destination" />
  </Container>
}

const Container = styled.View`
  padding: 12px 34px;
`