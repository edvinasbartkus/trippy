export type Place = {
  description: string;
  lat: number;
  lng: number;
};

export type StateType = {
  places: Place[];
};

export enum ActionTypes {
  ADD_PLACE = "ADD_PLACE",
}

export type Action = {
  type: ActionTypes;
  data: unknown;
};

export const initialState: StateType = {
  places: [
    {description: 'Vilnius', lat: 54.658145, lng: 25.2086729},
    {description: 'London', lat: 51.5285582, lng: -0.241678}
  ],
};

export function tripReducer(state: StateType = initialState, action: Action): StateType {
  switch (action.type) {
    case ActionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.data as Place),
      };
    default:
      return state;
  }
}
