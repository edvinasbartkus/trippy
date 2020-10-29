import React, { useEffect } from 'react'
import axios from 'axios'
import { mapboxToken } from './config'
import { Place } from '../../reducers/trip';

const url = (lat1: number, lng1: number, lat2: number, lng2: number) => `https://api.mapbox.com/directions/v5/mapbox/walking/${lat1},${lng1};${lat2},${lng2}?access_token=` + mapboxToken;

function retrieveDirections ([place1, place2]: [Place, Place]): Promise<string> {
  return axios
    .get(url(place1.lng, place1.lat, place2.lng, place2.lat))
    .then(({ data }) => {
      const [route] = data.routes
      const {geometry} = route
      return geometry
    })
}

export function useDirections (places: Place[]) {
  const [directions, setDirections] = React.useState<string[]>([])
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
