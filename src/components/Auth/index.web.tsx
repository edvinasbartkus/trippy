import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { QueryTrips } from "../QueryTrips";

function Auth() {
  return (
    <div>
      <QueryTrips />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Auth);
