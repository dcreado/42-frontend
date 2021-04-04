
export const environment = {

  production: true,
  aapiUri: "https://mighty-tundra-79980.herokuapp.com",
  auth: {
    "domain": "dev--vae0du0.us.auth0.com",
    "clientId": "OrKeNbV7EgHqmH7DPBWvTbw8nv7T44pT",
    "audience": "http://my-api/",
    redirectUri: window.location.origin,
  },
  httpInterceptor: {
    allowedList: [
    {
      uri: 'https://mighty-tundra-79980.herokuapp.com/api/order',
      tokenOptions: {
        audience: 'http://my-api/',
        scope: 'profile',
      },
    },{
      uri: 'https://mighty-tundra-79980.herokuapp.com/api/profile',
      tokenOptions: {
        audience: 'http://my-api/',
        scope: 'profile',
      },
    },],
  },
};
