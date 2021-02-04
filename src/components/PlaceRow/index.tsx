import React from "react";
import styled, { ThemeProps } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { Place } from "../../reducers/trip";
import { DirectionsControlView } from "../DirectionsControlView";
import { DirectionsStruct } from "../AbstractMap/hooks";

interface PlaceIterationNumberProps {
  isVisited: boolean;
  theme: ThemeProps;
}

export function PlaceRow({
  place,
  onPress,
  directions,
  onVisit,
  idx,
}: {
  place: Place;
  directions: DirectionsStruct;
  onPress: () => void;
  onVisit: (place: Place) => void;
  idx: number;
}) {
  return (
    <Container onPress={onPress}>
      <LineDirections />
      {directions && <DirectionsControlView place={place} {...directions} />}
      <PlaceTitleContainer>
        <Line />
        <PlaceIterationNumber
          isVisited={place.isVisited}
          onPress={() => onVisit(place)}
        >
          <IterationText isVisited={place.isVisited}>{idx + 1}</IterationText>
        </PlaceIterationNumber>
        <Text>{place.description}</Text>
      </PlaceTitleContainer>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  position: relative;
  padding: 0px 20px 0px 20px;
`;

const Line = styled.View<{ theme: ThemeProps }>`
  position: absolute;
  left: 24px;
  top: 0;
  width: 4px;
  height: 52px;
  background-color: ${props => props.theme.colors.darkCyan};
`

const LineDirections = styled(Line)`
  left: 44px;
`

const PlaceIterationNumber = styled.TouchableOpacity<PlaceIterationNumberProps>`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.darkCyan};
  background-color: ${(props) =>
    props.isVisited ? props.theme.colors.darkCyan : props.theme.colors.white};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const IterationText = styled.Text<PlaceIterationNumberProps>`
  color: ${(props) =>
    props.isVisited ? props.theme.colors.white : props.theme.colors.darkCyan};
  font-weight: 600;
`;

const PlaceTitleContainer = styled.View<{ theme: ThemeProps }>`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 12px;
  box-shadow: 0 1px 1px #00000010;
  border-radius: 8px;
`;
