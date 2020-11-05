import {
  ActionTypes,
  Place,
  RoutingProfile,
  StateType,
  tripReducer,
  UpdatePlacePayload,
} from "./trip";

describe("Places reducer", () => {
  it("should be able to update place", () => {
    const place: Place = {
      description: "Vilnius",
      lat: 1.0,
      lng: 1.0,
      routingProfile: RoutingProfile.WALKING,
    };
    const data: UpdatePlacePayload = {
      place: place,
      update: { routingProfile: RoutingProfile.DRIVING },
    };

    const initialState: StateType = {
      places: [place],
    };
    expect(
      tripReducer(initialState, { type: ActionTypes.UPDATE_PALCE, data })
    ).toMatchObject({
      places: [
        {
          description: "Vilnius",
          lat: 1.0,
          lng: 1.0,
          routingProfile: RoutingProfile.DRIVING,
        },
      ],
    });
  });
});
