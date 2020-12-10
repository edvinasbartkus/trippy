import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TripContext } from "../../contexts/TripContext";
import { ActionTypes, Place, RoutingProfile } from "../../reducers/trip";

const Icons = {
  [RoutingProfile.WALKING]: require("../../icons/walking.png"),
  [RoutingProfile.DRIVING]: require("../../icons/driving.png"),
  [RoutingProfile.CYCLING]: require("../../icons/cycling.png"),
};

const BlueIcons = {
  [RoutingProfile.WALKING]: require("../../icons/blue_walking.png"),
  [RoutingProfile.DRIVING]: require("../../icons/blue_driving.png"),
  [RoutingProfile.CYCLING]: require("../../icons/blue_cycling.png"),
};

type DirectionsControlViewProps = {
  place: Place;
  distance: number;
  duration: number;
};

export function DirectionsControlView({
  place,
  distance = 0,
  duration = 0,
}: DirectionsControlViewProps) {
  const { dispatch } = React.useContext(TripContext);
  const onPress = (profile: RoutingProfile) => () =>
    dispatch({
      type: ActionTypes.UPDATE_PALCE,
      data: {
        place,
        update: { routingProfile: profile },
      },
    });

  return (
    <Container>
      <RoutingProfileContainer>
        {Object.values(RoutingProfile).map((profile) => {
          return (
            <TouchableOpacity key={profile} onPress={onPress(profile)}>
              <IconImage
                source={
                  place.routingProfile === profile
                    ? BlueIcons[profile]
                    : Icons[profile]
                }
              />
            </TouchableOpacity>
          );
        })}
      </RoutingProfileContainer>
      <DetailsContainer>
        <DetailsImage source={require("../../icons/distance.png")} />
        <DetailsText>{(distance / 1000).toFixed(2)}km</DetailsText>
        <DetailsImage source={require("../../icons/time.png")} />
        <DetailsText>{(duration / 60).toFixed(2)}min</DetailsText>
      </DetailsContainer>
    </Container>
  );
}

const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-left-width: 3px;
  border-left-color: blue;
  margin-left: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const IconImage = styled.Image`
  margin-right: 15px;
  width: 24px;
  height: 24px;
`;

const DetailsImage = styled.Image`
  margin-right: 5px;
  margin-left: 15px;
  width: 20px;
  height: 20px;
`;

const DetailsText = styled.Text`
  width: 65px;
`;

const RoutingProfileContainer = styled.View`
  flex-direction: row;
`;
