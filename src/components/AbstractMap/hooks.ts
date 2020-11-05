import axios from 'axios';
import React, { useEffect } from 'react';
import polylineDecoder from "@mapbox/polyline";
import { Place } from '../../reducers/trip';
import { mapboxToken } from '../../mapConfig';

enum DirectionsType {
  WALKING = "walking",
  DRIVING = "driving"
}

export type DirectionsStruct = {
  polyline: string;
  coordinates: number[][];
  type: DirectionsType;
  distance: number;
  duration: number;
}

const url = (lat1: number, lng1: number, lat2: number, lng2: number) => `https://api.mapbox.com/directions/v5/mapbox/walking/${lat1},${lng1};${lat2},${lng2}?access_token=` + mapboxToken;

function retrieveDirections ([place1, place2]: [Place, Place]): Promise<DirectionsStruct> {
  return axios
    .get(url(place1.lng, place1.lat, place2.lng, place2.lat))
    .then(({ data }) => {
      const [route] = data.routes
      const {geometry, duration, distance} = route
      return {
        polyline: geometry,
        coordinates: polylineDecoder.decode(geometry),
        type: DirectionsType.WALKING,
        duration: duration,
        distance: distance
      }
    })
}

export function useDirections (places: Place[]) {
  const [directions, setDirections] = React.useState<DirectionsStruct[]>([])
  const pairs = arrayToPairs(places)

  useEffect(() => {
    Promise
      .all(pairs.map(retrieveDirections))
      .then(setDirections)
  }, [places])

  return directions
}

type Pair<T> = [T, T];

export function arrayToPairs<T> (arr: T[]): Array<Pair<T>> { 
  const pairs: Array<Pair<T>> = []
  let [prevPlace] = arr
  for (const place of arr.slice(1)) {
    pairs.push([prevPlace, place])
    prevPlace = place
  }

  return pairs
}
