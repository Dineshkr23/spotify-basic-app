const express = require('express');

const router = express.Router();

const {getLoginUrl, getAuthorizationToken, getAllRecos, getUser} = require("../controllers/oauth");

router.get("/login",getLoginUrl);
router.post("/verifyToken",getAuthorizationToken);
router.post("/getReco",getAllRecos);
router.post("/getMe",getUser);
module.exports = router;
