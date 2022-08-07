// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  authLoginStateGeneratorAlfabeto: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

};

export const SpotifyConfiguration = {

  clientId: 'c383d9a2ae794a9f8a6df970d5c30592',
  // clientSecret: '0d7c899d376b4ae998e4f2f7e14cf5b2',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/authCallback',
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-playback-state", // ler estado do player do usuario
    "user-modify-playback-state", // alterar do player do usuario
    "streaming" // ler playlists colaborativas
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
