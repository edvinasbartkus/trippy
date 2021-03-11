import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, SafeAreaView } from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Trip } from "../../models/index";

export function QueryTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const retrieveTrips = () => {
    DataStore.query(Trip).then((trips) => setTrips(trips));
  }

  const onDelete = (trip: Trip) => {
    DataStore.delete(trip)
  }

  useEffect(() => {
    retrieveTrips();

    const subscriptions = DataStore.observe(Trip).subscribe(msg => {
      retrieveTrips();
    })

    return () => subscriptions.unsubscribe();
  }, []);

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
