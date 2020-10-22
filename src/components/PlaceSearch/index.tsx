import axios from 'axios';
import React from "react";
import { Button, Text } from "react-native";
import styled from "styled-components/native";

const KEY = 'pk.eyJ1IjoiZWR2aW5hc2JhcnRrdXMiLCJhIjoiY2s2djV3bHd0MGcxMzNta2h6MmFrbjVpcyJ9.zxKeJrSWjbOleW3MUBwh0g';

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
      console.log(feature)
      const [lat, lng] = feature.geometry?.coordinates || [];
      return {
        name: feature.place_name,
        text: feature.text,
        lat,
        lng,
      }
    }))
  }, [search]);

  return (
    <Container>
      <StyledTextInput value={search} onChangeText={setSearch} />
      <Button title="Search" onPress={onSearch} />

      {results.map(place => {
        return <StyledPlace key={place.text}>
          <Text>{place.text}: {place.name}</Text>
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

const StyledPlace = styled.View`
  padding: 5px;
`
