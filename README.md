# Spotify App

This project was bootstrapped with [Create React App & spotifiy dev apis](https://developer.spotify.com).

## Prerequisite to run the App

### Need to update the Spotify credentials

#### update the following file

 - Backend > library > spotifyWebApi.js

 ```
  - clientId =  write your Spotify client ID 
  - clientSecret = write your Spotify client secret 
 ```
 You can get your spotify credentials by creating a developer account in Spotify : https://developer.spotify.com/dashboard/.
 Screenshot for the same : 
 ![image](https://user-images.githubusercontent.com/71818805/192348205-68c681ef-5eb7-4a25-b0ed-e88be479705b.png)

 - Run mongodb locally 

 ```
 sudo service mongod start
 ```

## Available Scripts

In the project directory, you can run:

### `install the packages for React & node server`
 ```
 npm run dev-install
 ```
### `Start the React App & node server`
```
npm run dev-start
 ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

