const {Team} = require("../models/Team");
const {Sports} = require("../models/Sports")
const {User} = require("../models/User");

const isLoggedIn = require('../helper/isLoggedIn');

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



// USER PROFILE SHOW - HTTP GET
exports.auth_profile_get = (req, res) => {
    res.render("auth/detail");
};


// exports.auth_profile_get = (req, res) => {
//     Team.find()
//     .then((team) => {
//         Sports.find()
//             .then((sports) => {
//                 res.render("auth/detail", {sports, team});
//             })
//             .catch((err) => {
//                 console.log(err);
//                 res.send("Sorry there's an error")
//             });
//         })
// };



// USER PROFILE UPDATE - HTTP GET & PUT
exports.auth_edit_get = (req, res) => {

    User.findById(req.query.id)
    .then((user) => {
        res.render("auth/edit", {user})        
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
};

exports.auth_edit_put = (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/auth/profile")
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
};



// USER PASSWORD UPDATE - HTTP GET & PUT

exports.auth_password_get = (req, res) => {
    User.findById(req.query.id)
    .then((user) => {
        res.render("auth/password", {user})        
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
};

// exports.auth_password_post = (req, res, next) => {
//     if (newPassword !== newPasswordConfirm) {
//         req.flash("danger", "New password and password confirmation don't match!")
//     }
//     var user = req.user;
//     user.password = newPassword;
//     user.save(function(err){
//          if (err) { next(err) }
//          else {
//              res.redirect('/auth/profile');
//          }
//      })
// };

exports.auth_password_put = (req, res, next) => {
    if (req.body.newPassword !== req.body.newPasswordConfirm) {
        req.flash("error", "New password and password confirmation don't match!")
        res.redirect('/auth/password')
    } else {
        User.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
        var user = req.user;
        let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
        user.password = hashedPassword;
        user.save(function(err){
            if (err) { next(err) }
                else {
                    res.redirect('/auth/profile');
                }
            })
        })
        .catch((err) => {
            console.log(err);
            res.send("Sorry there was an error");
        })
    }
};



