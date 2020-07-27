// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Enviroment } from 'src/app/interface';

export const environment: Enviroment = {
  production: false,
  fbApiKey: 'AIzaSyC_XOT0xI5v-wn_o6jUas1ypYGEFC4Vo0I',
  fbDbUrl: 'https://angular-books-88d06.firebaseio.com/',
  fbAuthUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:',
  googleApiKey: 'AIzaSyBL5ZOfArVpPbPe6u2CQQfuf8yzv8rTkPo',
  googleUrl: 'https://www.googleapis.com/books/v1/volumes?q='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
