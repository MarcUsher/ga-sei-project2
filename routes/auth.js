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
router.get("/auth/profile", isLoggedIn, authCtrl.auth_profile_get);
router.get("/auth/edit", authCtrl.auth_edit_get);
router.put("/auth/update", authCtrl.auth_edit_put);
router.get("/auth/password", authCtrl.auth_password_get);
router.put("/auth/newpassword", authCtrl.auth_password_put);

module.exports = router;