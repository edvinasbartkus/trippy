import axios from "axios";
import React, { useEffect } from "react";
import polylineDecoder from "@mapbox/polyline";
import { Place, RoutingProfile } from "../../reducers/trip";
import { mapboxToken } from "../../mapConfig";

export type DirectionsStruct = {
  polyline: string;
  coordinates: number[][];
  type: RoutingProfile;
  distance: number;
  duration: number;
};

const url = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
  type: RoutingProfile = RoutingProfile.WALKING
) =>
  `https://api.mapbox.com/directions/v5/mapbox/${type}/${lat1},${lng1};${lat2},${lng2}?access_token=` +
  mapboxToken;

function retrieveDirections([place1, place2]: [Place, Place]): Promise<
  DirectionsStruct
> {
  const directionsURL = url(place1.lng, place1.lat, place2.lng, place2.lat, place2.routingProfile);
  console.log(directionsURL);

  return axios
    .get(directionsURL)
    .then(({ data }) => {
      const [route] = data.routes;
      const { geometry, duration, distance } = route;
      return {
        polyline: geometry,
        coordinates: polylineDecoder.decode(geometry),
        type: place2.routingProfile,
        duration: duration,
        distance: distance,
      };
    });
}

export function useDirections(places: Place[]) {
  const [directions, setDirections] = React.useState<DirectionsStruct[]>([]);
  const pairs = arrayToPairs(places);

  useEffect(() => {
    Promise.all(pairs.map(retrieveDirections)).then(setDirections);
  }, [places]);

  return directions;
}

type Pair<T> = [T, T];

export function arrayToPairs<T>(arr: T[]): Array<Pair<T>> {
  const pairs: Array<Pair<T>> = [];
  let [prevPlace] = arr;
  for (const place of arr.slice(1)) {
    pairs.push([prevPlace, place]);
    prevPlace = place;
  }

  return pairs;
}
