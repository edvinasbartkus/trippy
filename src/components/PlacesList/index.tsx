import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { MapContext } from "../../contexts/MapContext";
import { TripContext } from "../../contexts/TripContext";
import { ThemeProps } from "../../helpers/theme";
import { ActionTypes } from "../../reducers/trip";
import { useDirections } from "../AbstractMap/hooks";
import { DirectionsControlView } from "../DirectionsControlView";
import { Link } from "../Router";

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const Img = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

interface PlaceIterationNumberProps {
  isVisited: boolean;
  theme: ThemeProps;
}

export function PlacesList() {
  const { setLatLng, setPlaces } = React.useContext(MapContext);
  const {
    state: { places },
  } = React.useContext(TripContext);
  const directions = useDirections(places);

  useEffect(() => {
    setPlaces(places);
  }, [places]);

  const { dispatch } = React.useContext(TripContext);
  const onVisit = React.useCallback(place => {
    dispatch({
      type: ActionTypes.UPDATE_PALCE,
      data: {
        place,
        update: { isVisited: !place.isVisited },
      },
    });
  }, []);

  return (
    <Container>
      <DayContainer>
        <DayText>Day 1</DayText>
      </DayContainer>
      {places.map((place, idx) => {
        return (
          <StyledPlace
            key={place.description + idx}
            onPress={() => setLatLng(place.lat, place.lng)}
          >
            {directions[idx - 1] && (
              <DirectionsControlView place={place} {...directions[idx - 1]} />
            )}
            <PlaceTitleContainer>
              <PlaceIterationNumber isVisited={place.isVisited} onPress={() => onVisit(place)}>
                <IterationText isVisited={place.isVisited}>{idx + 1}</IterationText>
              </PlaceIterationNumber>
              <Text>{place.description}</Text>
            </PlaceTitleContainer>
          </StyledPlace>
        );
      })}
      <Link to="/search">
        <SearchContainer>
          <Img source={require("../../icons/plus.png")} />
          <Text>Add destination</Text>
        </SearchContainer>
      </Link>
    </Container>
  );
}

const DayContainer = styled.View`
  padding: 15px 35px;
`

const DayText = styled.Text`
  font-weight: 500;
`

const PlaceIterationNumber = styled.TouchableOpacity<PlaceIterationNumberProps>`
  width: 25px;
  height: 25px;
  border-width: 2.5px;
  border-color: ${({ theme }) => theme.colors.darkCyan};
  background-color: ${props => props.isVisited ? props.theme.colors.darkCyan : props.theme.colors.white};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const IterationText = styled.Text<PlaceIterationNumberProps>`
  color: ${props => props.isVisited ? props.theme.colors.white : props.theme.colors.darkCyan};
  font-weight: 600;
`;

const PlaceTitleContainer = styled.View<{ theme: ThemeProps }>`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.whiteSmoke};
  padding: 15px 10px;
  border-radius: 8px;
`;

const Container = styled.View`
  padding-bottom: 5px;
`;

const StyledPlace = styled.TouchableOpacity`
  padding: 0px 10px 0px 10px;
`;
