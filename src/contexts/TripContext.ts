import React from 'react';
import { Action, initialState, StateType } from '../reducers/trip';

export const TripContext = React.createContext<{state: StateType, dispatch: React.Dispatch<Action>}>({
  state: initialState,
  dispatch: ({ type, data }) => {}
});
