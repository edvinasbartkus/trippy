import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { View, Text, Button, TextInput, SafeAreaView } from "react-native";
import { Trip } from "../../models/index";
import { useTrips } from "../../helpers/hooks";

export function QueryTrips() {
  const onDelete = (trip: Trip) => {
    DataStore.delete(trip)
  }

  const trips = useTrips()

  return (
    <SafeAreaView>
      {trips.map((trip) => {
        return (
          <View key={trip.id}>
            <Text>{trip.name}</Text>
            <Button title='Delete' onPress={() => onDelete(trip)} />
          </View>
        );
      })}

      <TripForm />
    </SafeAreaView>
  );
}

function TripForm() {
  const [name, setName] = useState("");

  const onSave = async () => {
    await DataStore.save(
      new Trip({
        name: name,
      })
    );
  };

  return (
    <View>
      <TextInput onChangeText={setName} />
      <Button title="Save" onPress={onSave} />
    </View>
  );
}
