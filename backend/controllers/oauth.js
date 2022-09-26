const querystring = require("querystring");
const request = require('request'); // "Request" library
const {authorizeUrl, authorizeCode, getRecommendations, getUserInfo} = require("../library/spotifyWebApi");

const getLoginUrl = async(req,res,next) => {
    try{
        var authorizeURL = await authorizeUrl();
        res.status(200).json({
            'data': authorizeURL,
            'message': 'Success'
        });
    }
    catch(error){
        console.log("Error in authorizeUrl",error);
        res.status(500).json({
            'data': null,
            'message': 'Error'
        });
    }
}

const getAuthorizationToken = async(req,res,next) => {
    var code = req.body.code || null;
  
    try{
        let authorizedCode = await authorizeCode(code);
        res.status(200).json({
            'data': authorizedCode,
            'message': 'Success'
        });
    }
    catch(error){
        console.log("Error in authorizeCode",error);
        res.status(500).json({
            'data': null,
            'message': 'Error'
        });
    }


}

const getAllRecos = async(req,res,next) => {
    let accessToken = req.body.access_token || null;
    console.log("headers are",req.headers)
    try{
        let genres = await getRecommendations(accessToken);
        res.status(200).json({
            'data': genres,
            'message': 'Success'
        });
    }
    catch(error){
        res.status(500).json({
            'data': null,
            'message': 'Error'
        });
    }
}

const getUser = async(req,res,next) => {
    let accessToken = req.body.access_token || null;
    try{
        let userInfo = await getUserInfo(accessToken);
        res.status(200).json({
            'data': userInfo,
            'message': 'Success'
        });
    }
    catch(error){
        res.status(500).json({
            'data': null,
            'message': error
        });
    }
}

module.exports = {
    getLoginUrl,
    getAuthorizationToken,
    getAllRecos,
    getUser
}