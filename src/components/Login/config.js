const oktaAuthConfig = {
  issuer: "https://dev-35500050.okta.com/oauth2/default",
  clientId: "0oa2fm4wg5tJITVt85d7",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: "https://dev-35500050.okta.com",
  clientId: "0oa2fm4wg5tJITVt85d7",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {},
};

export { oktaAuthConfig, oktaSignInConfig };
