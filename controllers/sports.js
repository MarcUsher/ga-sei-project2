const {Sports} = require("../models/Sports");
const {Team} = require("../models/Team");
const {User} = require("../models/User");

const moment = require('moment');
const isLoggedIn = require('../helper/isLoggedIn');

// All Sports Index - GET request
exports.sports_index_get = (req, res) => {
    Sports.find().populate("teams")
    .then((sports) => {
        res.status(200).render("sports/index", {sports, moment})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    })
};



// Add A Sport - GET form & POST form

// Add Sport GET form
exports.sports_add_get = (req, res) => {
    res.status(200).render("sports/add");
};


exports.sports_add_post = (req, res) => {
    let sports = new Sports(req.body);
    sports.save()
    .then(() => {
        res.redirect("/sports/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    });
}

// show sport Details - when user clicks on a sport
exports.sports_details_get = (req, res) => {
    Sports.findById(req.query.id).populate("teams").populate("createdBy")
    .then((sports)=>{
        res.status(200).render("sports/detail", {sports, moment});
    })
    .catch((err)=>{
        console.log(err);
        res.send("sorry there is an error")
    })
    
};



// API for EDIT - GET and PUT

exports.sports_edit_get = (req, res) => {

    Sports.findById(req.query.id)
    .then((sports) => {
        res.status(200).render("sports/edit", {sports, moment})        
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}


exports.sports_edit_put = (req, res) => {
    Sports.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/sports/index")
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}


// API for DELETE - GET
exports.sports_delete_get = (req, res) => {
    Sports.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/auth/profile");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}