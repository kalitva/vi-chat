// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  useEmulators: true,
  firebase: {
    projectId: 'vi-chat-cd7e1',
    appId: '1:1097545289027:web:97f8537effaeb5bc6373f6',
    databaseURL: 'https://vi-chat-cd7e1-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'vi-chat-cd7e1.appspot.com',
    apiKey: 'AIzaSyCiCjOpp7Z3bexT4jvcBq73GpX_P01bKfc',
    authDomain: 'vi-chat-cd7e1.firebaseapp.com',
    messagingSenderId: '1097545289027',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
