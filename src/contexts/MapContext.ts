import React from "react";

export type MapContextProps = {
  lng: number;
  lat: number;
  setLatLng: (lat: number, lng: number) => void;
};

export const MapContext = React.createContext<MapContextProps>({});
