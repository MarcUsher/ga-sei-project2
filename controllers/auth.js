const User = require("../models/User");

const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const salt = 10;

const passport = require("../helper/ppConfig");


// SIGN UP ROUTE

// SIGN UP - HTTP GET
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
};


// SIGN UP - HTTP POST
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    let hashedPassword = bcrypt.hashSync(req.body.password, salt);

    user.password = hashedPassword;

    user.save()
    .then(() => {
        res.redirect("/auth/signin");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry, try again later")
    })
};



// SIGN IN ROUTE

// SIGN IN - HTTP GET
exports.auth_signin_get = (req, res) => {
    res.render("auth/signin");
};


// SIGN IN - HTTP POST
exports.auth_signin_post = 
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/auth/signin",
        failureFlash: "Invalid username or password.",
        successFlash: "You have signed in!"
    });




// LOGOUT ROUTE - HTTP GET
exports.auth_logout_get = (req, res) => {
    req.logout(function(err) {
        if (err) {return next(err); }
        req.flash("success", "You have successfully logged out!")
        res.redirect("/");
    });
}

