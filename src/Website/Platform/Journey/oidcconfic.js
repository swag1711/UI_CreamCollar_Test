const oidcConfig = {
    clientId: 'creamcollar_client',
    moodleBaseUrl: 'https://moodle.dev.cream-collar.com/moodle/',
    redirectUri: 'https://moodle.dev.cream-collar.com/moodle/auth/oidc/',
    scope: 'openid profile email',
    responseType: 'token',
    authority: 'https://test1.cream-collar.com:8443',
  };
  
  export default oidcConfig;