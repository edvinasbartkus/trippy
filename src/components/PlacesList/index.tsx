import React, { useEffect } from "react";
import styled from "styled-components/native";
import { MapContext } from "../../contexts/MapContext";
import { TripContext } from "../../contexts/TripContext";
import { ActionTypes } from "../../reducers/trip";
import { useDirections } from "../AbstractMap/hooks";
import { AddDestinationButton } from "../AddDestinationButton";
import { DayHeadline } from "../DayHeadline";
import { PlaceRow } from "../PlaceRow";
import { Link } from "../Router";

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
  const onVisit = React.useCallback((place) => {
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
      <DayHeadline />
      {places.map((place, idx) => {
        return (
          <PlaceRow
            place={place}
            idx={idx}
            key={place.description + idx}
            onPress={() => setLatLng(place.lat, place.lng)}
            onVisit={onVisit}
            directions={directions[idx - 1]}
          />
        );
      })}
      <Link to="/search">
        <AddDestinationButton />
      </Link>
    </Container>
  );
}

const Container = styled.View`
  padding-bottom: 5px;
`;
