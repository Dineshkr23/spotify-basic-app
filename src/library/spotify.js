import SpotifyWebApi from "spotify-web-api-node";

var scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "playlist-modify-private",
  ],
  redirectUri = "http://localhost:3000/callback/",
  clientId = "65c223012f3b44ab94617824e0b19391",
  clientSecret = "f0277321210c4afb9b6a2c21f5649732",
  state = (Math.random() + 1).toString(36).substring(7);

var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret,
});

export const authorizeUrl = () =>
  new Promise(async (resolve, reject) => {
    try {
      var authorizeURL = await spotifyApi.createAuthorizeURL(scopes, state);
      resolve(authorizeURL);
    } catch (error) {
      console.log("Error in authorizeUrl", error);
      reject(error);
    }
  });

export const authorizeCode = (code) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("Code is", code);
      let authorizedCode = await spotifyApi.authorizationCodeGrant(code);
      resolve(authorizedCode);
    } catch (error) {
      console.log("Error in authorizeCode", error.body);
      reject(error);
    }
  });
