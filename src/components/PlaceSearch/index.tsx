import axios from 'axios';
import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MapContext } from '../../contexts/MapContext';
import { TripContext } from '../../contexts/TripContext';
import { mapboxToken } from '../../mapConfig';
import { ActionTypes, Place } from '../../reducers/trip';

const KEY = mapboxToken;

type Result = {
  name: string;
  text: string;
  lat: number;
  lng: number;
}

type FeatureJSON = {
  geometry: {
    coordinates: number[]
  };
  place_name: string;
  text: string;
}

export function PlaceSearch() {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<Result[]>([]);

  const onSearch = React.useCallback(async () => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(search) + '.json?access_token=' + KEY
    const output = await axios.get(url);
    const features = output?.data?.features;

    setResults(features.map((feature: FeatureJSON) => {

      const [lng, lat] = feature.geometry?.coordinates || [];
      return {
        name: feature.place_name,
        text: feature.text,
        lat,
        lng,
      }
    }))
  }, [search]);

  const { setLatLng } = React.useContext(MapContext)
  const { dispatch } = React.useContext(TripContext)

  return (
    <Container>
      <StyledTextInput value={search} onChangeText={setSearch} />
      <Button title="Search" onPress={onSearch} />

      {results.map((result, idx) => {
        const place: Place = {
          description: result.text,
          lat: result.lat,
          lng: result.lng
        }

        return <StyledPlace key={place.description + idx} onPress={() => setLatLng(place.lat, place.lng)}>
          <Text>
            <TouchableOpacity onPress={() => dispatch({ type: ActionTypes.ADD_PLACE, data: place })}>
              <Text>+</Text>
            </TouchableOpacity>
            {place.description}
          </Text>
        </StyledPlace>
      })}
    </Container>
  );
}

const Container = styled.View`
  padding: 0 10px;
`

const StyledTextInput = styled.TextInput`
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 5px;
`;

const StyledPlace = styled.TouchableOpacity`
  padding: 5px;
`
