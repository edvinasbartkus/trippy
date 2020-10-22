type Place = {
  description: string;
  lat: number;
  lon: number;
};

type StateType = {
  places: Place[];
};

enum ActionTypes {
  ADD_PLACE = "ADD_PLACE",
}

type Action = {
  type: ActionTypes;
  data: unknown;
};

const initialState: StateType = {
  places: [],
};

export function tripReducer(state: StateType = initialState, action: Action) {
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
