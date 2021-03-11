import React from "react";
import { View, Text } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { QueryTrips } from "../QueryTrips";

function Auth() {
  return (
    <View>
      <QueryTrips />
    </View>
  );
}

export default withAuthenticator(Auth);
