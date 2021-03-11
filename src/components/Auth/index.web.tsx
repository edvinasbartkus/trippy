import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Auth() {
  return (
    <div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Auth);
