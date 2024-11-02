import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-6lsezors8w8wwh3k.us.auth0.com',
      clientId: 'jCT0jVEeCWnDI1ZEPh6bF3JQPItqMwcE',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-6lsezors8w8wwh3k.us.auth0.com/api/v2/',
        scope: 'openid profile email offline_access',
      },
      cacheLocation: 'localstorage',
    }),
  ],
};
