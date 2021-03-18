import React from "react";
import styled from "styled-components/native";
import { Plus } from "../components/AddDestinationButton/plus";
import { ButtonInline } from "../components/ButtonInline";
import { TripView } from "../components/TripView";
import { useTrips } from "../helpers/hooks";

const Container = styled.SafeAreaView`
  margin: 10px;
`

const ButtonContainer = styled.View`
  margin: 10px;
`

const TripsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export function HomeScreen() {
  const trips = useTrips();

  return (
    <Container>
      <ButtonContainer>
        <ButtonInline IconComponent={Plus} label="Create new trip" />
      </ButtonContainer>
      <TripsContainer>
        {trips.map((trip) => {
          return <TripView key={trip.id} trip={trip} />;
        })}
      </TripsContainer>
    </Container>
  );
}
