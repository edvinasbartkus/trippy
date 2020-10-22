import React from "react";
import { Place } from "../reducers/trip";

export type MapContextProps = {
  lat: number;
  lng: number;
  setLatLng: (lat: number, lng: number) => void;
  
  places: Place[];
  setPlaces: (places: Place[]) => void;
};

export const MapContext = React.createContext<MapContextProps>({});
