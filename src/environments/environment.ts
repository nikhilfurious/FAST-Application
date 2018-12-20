// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDZVelML_uAf7uS39s4UArrUfoCyx18ujM',
    authDomain: 'vasam-3f548.firebaseapp.com',
    databaseURL: 'https://vasam-3f548.firebaseio.com',
    projectId: 'vasam-3f548',
    storageBucket: 'vasam-3f548.appspot.com',
    messagingSenderId: `985322956938`
  },
  faceapi: {
    key: 'a461204f6c7d43738dd5c2d829dcf526',
    region: 'EUS2'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
