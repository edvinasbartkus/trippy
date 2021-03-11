import React from "react";
import { View, Text } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";

function Auth() {
  return (
    <View>
      <Text>Auth view</Text>
    </View>
  );
}

export default withAuthenticator(Auth);
