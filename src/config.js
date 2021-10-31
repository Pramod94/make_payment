const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: "https://dev-35500050.okta.com/oauth2/default",
  // issuer: "https://ibmpmdm.okta.com/oauth2/default",
  clientId: "0oa2fm4wg5tJITVt85d7",
  // clientId: "0oa51ntvwkR3rsMnc696",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  // baseUrl: "https://ibmpmdm.okta.com",
  // clientId: "0oa51ntvwkR3rsMnc696",
  baseUrl: "https://dev-35500050.okta.com",
  clientId: "0oa2fm4wg5tJITVt85d7",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {
    // If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to uncomment the below line
    // pkce: false
  },
  // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};

export { oktaAuthConfig, oktaSignInConfig };
