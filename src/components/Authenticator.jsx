import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../aws-exports.js";
import { AppBar, Toolbar, Box, Tab } from "@material-ui/core";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <AppBar position="relative" width="100%">
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <h4>Welcome {user.username}!</h4>
          <h4>
            <Tab />
            <Tab />
            <Tab />
            Wear a Mask to save the risk.
          </h4>
        </Box>
        <button alignItems="right" onClick={signOut}>
          Sign out
        </button>
      </Toolbar>
    </AppBar>
  );
}

export default withAuthenticator(App);
