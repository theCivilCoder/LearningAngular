// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//API key will be expired when full project is uploaded to github 
export const environment = {
  production: false,
  BASE_URL:'https://rawg-video-games-database.p.rapidapi.com',
   KEY: "34fe624a29ab41c7bddd9fdb4cff8fdc", //API KEY RECEIVED FROM https://rawg.io/@guitarcore/apikey
   API_KEY:"6a05c63b7emsha08a1cee4ac0623p18c0e8jsne4ca3434d869" //API KEY RECEIVED FROM https://rapidapi.com/accujazz/api/rawg-video-games-database/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
