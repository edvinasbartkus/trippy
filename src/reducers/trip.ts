export enum RoutingProfile {
  WALKING = 'walking',
  DRIVING = 'driving',
  CYCLING = 'cycling'
}

export type Place = {
  description: string;
  lat: number;
  lng: number;
  routingProfile: RoutingProfile;
};

export type StateType = {
  places: Place[];
};

export enum ActionTypes {
  ADD_PLACE = "ADD_PLACE",
  UPDATE_PALCE = "UPDATE_PLACE"
}

export type Action = {
  type: ActionTypes;
  data: unknown;
};

export type UpdatePlacePayload = {
  place: Place;
  update: object
}

export const initialState: StateType = {
  places: [
    {description: 'The British Museum', lat: 51.5194133, lng: -0.1291506, routingProfile: RoutingProfile.WALKING},
    {description: 'Tate Modern', lat: 51.5075953, lng: -0.1015504, routingProfile: RoutingProfile.WALKING},
    // {description: 'Vilnius', lat: 54.658145, lng: 25.2086729},
    // {description: 'London', lat: 51.5285582, lng: -0.241678}
  ],
};

export function tripReducer(state: StateType = initialState, action: Action): StateType {
  switch (action.type) {
    case ActionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.data as Place),
      };
    case ActionTypes.UPDATE_PALCE:
      return {
        ...state,
        places: state.places.map(place => {
          if ((action.data as UpdatePlacePayload).place === place) {
            return {
              ...place,
              ...(action.data as UpdatePlacePayload).update
            }
          }
          return place
        })
      }
    default:
      return state;
  }
}
