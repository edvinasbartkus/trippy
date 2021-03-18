import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

type ButtonInlineProps = {
  IconComponent: React.FC<any>;
  label: string;
}

export function ButtonInline({ IconComponent, label }: ButtonInlineProps) {
  return (
    <Container>
      <SubContainer>
        <IconComponent />
      </SubContainer>
      <Text>{label}</Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SubContainer = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 14px;
`;
