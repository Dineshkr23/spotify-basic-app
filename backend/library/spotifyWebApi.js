const SpotifyWebApi = require('spotify-web-api-node');


var scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-modify-private'],
    redirectUri = 'http://localhost:3000/callback/',
    clientId = "write your client ID here",
    clientSecret = "write your client secret here",
    state = (Math.random() + 1).toString(36).substring(7);

var spotifyApi = new SpotifyWebApi({
        redirectUri: redirectUri,
        clientId: clientId,
        clientSecret: clientSecret
});

var authorizeUrl = () => new Promise(async(resolve,reject) => {
    try{
        var authorizeURL = await spotifyApi.createAuthorizeURL(scopes, state);
        resolve(authorizeURL);
    }
    catch(error){
        console.log("Error in authorizeUrl",error);
        reject(error);
    }
})

var authorizeCode = (code) => new Promise(async(resolve,reject) =>{
    try{
        console.log("Code is",code);
        let authorizedCode = await spotifyApi.authorizationCodeGrant(code);
        resolve(authorizedCode);
    }
    catch(error){
        console.log("Error in authorizeCode",error);
        reject(error);
    }
});

var getRecommendations = (accessToken) => new Promise(async(resolve,reject) => {
    spotifyApi.setAccessToken(accessToken);
    
    try{
        let getRecommendations = await spotifyApi.getRecommendations({
            min_energy: 1,
            seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
      min_popularity: 100
        });
        console.log("Recommended body is",getRecommendations.body);
        resolve(getRecommendations.body);
    }
    catch(error){
        console.log("Error in getRecommendations",error);
        reject(error);
    }
});

var getUserInfo = (accessToken) => new Promise(async(resolve,reject) => {
    spotifyApi.setAccessToken(accessToken);
    try{
        spotifyApi.getMe().then(d => {
            resolve(d.body)
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })
        
    }
    catch(error){
        console.log(error);
        reject(error);
    }
})

module.exports = {
    authorizeUrl,
    authorizeCode,
    getRecommendations,
    getUserInfo
}
    