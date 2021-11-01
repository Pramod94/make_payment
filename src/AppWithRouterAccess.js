import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import ViewBalance from "./components/ViewBalance/ViewBalance";
import Login from "./components/Login/Login";
import PayConfirmation from "./components/PayConfirmation/PayConfirmation";
import { oktaAuthConfig, oktaSignInConfig } from "./components/Login/config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Switch>
        <SecureRoute path="/" exact={true} component={ViewBalance} />
        <SecureRoute path="/payConfirmation" component={PayConfirmation} />
        <Route
          path="/login"
          render={() => <Login config={oktaSignInConfig} />}
        />
        <Route path="/login/callback" component={LoginCallback} />
      </Switch>
    </Security>
  );
};

export default AppWithRouterAccess;
