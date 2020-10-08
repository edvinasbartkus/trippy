import React from "react";
import { MapContext, MapContextProps } from "../contexts/MapContext";

type MapContextContainerProps = {
  children: React.ReactNode;
};

export function MapContextContainer({ children }: MapContextContainerProps) {
  const [lat, setLat] = React.useState(-0.481747846041145);
  const [lng, setLng] = React.useState(51.3233379650232);
  const context: MapContextProps = {
    lat,
    lng,
    setLatLng: (lat, lng) => {
      setLat(lat);
      setLng(lng);
    },
  };
  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
}
