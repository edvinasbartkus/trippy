import { useState, useEffect, useCallback } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Trip } from "../models";

export function useTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const retrieveTrips = useCallback(() => {
    DataStore.query(Trip).then((trips) => setTrips(trips));
  }, [])

  useEffect(() => {
    retrieveTrips();

    const subscriptions = DataStore.observe(Trip).subscribe(msg => {
      retrieveTrips();
    })

    return () => subscriptions.unsubscribe();
  }, []);

  return trips;
}