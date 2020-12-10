import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { MapContext } from "../../contexts/MapContext";
import { TripContext } from "../../contexts/TripContext";
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

export function PlacesList() {
  const { setLatLng, setPlaces } = React.useContext(MapContext);
  const {
    state: { places },
  } = React.useContext(TripContext);
  const directions = useDirections(places);

  useEffect(() => {
    setPlaces(places);
  }, [places]);

  return (
    <Container>
      <Link to="/search">
        <SearchContainer>
          <Img source={require("../../icons/plus.png")} />
          <Text>Add destination</Text>
        </SearchContainer>
      </Link>
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
              <PlaceIterationNumber>
                <IterationText>{idx + 1}</IterationText>
              </PlaceIterationNumber>
              <Text>{place.description}</Text>
            </PlaceTitleContainer>
          </StyledPlace>
        );
      })}
    </Container>
  );
}

const PlaceIterationNumber = styled.View`
  width: 25px;
  height: 25px;
  background-color: blue;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const IterationText = styled.Text`
  color: white;
  font-weight: 600;
`;

const PlaceTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  padding-bottom: 5px;
`;

const StyledPlace = styled.TouchableOpacity`
  padding: 0px 10px 0px 10px;
`;
