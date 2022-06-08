const express = require('express');
const router = express.Router();
const isLoggedIn = require('../helper/isLoggedIn');

// Adding methodOverride so that we can add Edit functionality later (HTTP PUT), and adding body parse for the same reason
var methodOverride = require("method-override");
router.use(express.urlencoded({extended: true}));
router.use(methodOverride('_method'));


const authCtrl = require("../controllers/auth")


// ROUTES
router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);
router.get("/auth/signin", authCtrl.auth_signin_get);
router.post("/auth/signin", authCtrl.auth_signin_post);
router.get("/auth/logout", authCtrl.auth_logout_get);
router.get("/auth/profile", authCtrl.auth_profile_get);

module.exports = router;