// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUri: "ttps://mighty-tundra-79980.herokuapp.com",
  auth: {
    "domain": "dev--vae0du0.us.auth0.com",
    "clientId": "OrKeNbV7EgHqmH7DPBWvTbw8nv7T44pT",
    "audience": "http://my-api/",
    redirectUri: window.location.origin,
  },
  httpInterceptor: {
    allowedList: [
    {
      uri: 'ttps://mighty-tundra-79980.herokuapp.com/api/order',
      tokenOptions: {
        audience: 'http://my-api/',
        scope: 'profile',
      },
    },{
      uri: 'ttps://mighty-tundra-79980.herokuapp.com/api/profile',
      tokenOptions: {
        audience: 'http://my-api/',
        scope: 'profile',
      },
    },],
  },
};

