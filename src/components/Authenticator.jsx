import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../aws-exports.js";
import { AppBar, Toolbar, Box } from "@material-ui/core";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <AppBar position="static" width="100%">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <h2>Welcome {user.username}</h2>
          <h3>Wear a Mask to save the risk!</h3>
        </Box>
        <button alignItems="right" onClick={signOut}>
          Sign out
        </button>
      </Toolbar>
    </AppBar>
  );
}

export default withAuthenticator(App);
