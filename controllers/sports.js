const Sports = require("../models/Sports");
const moment = require('moment');

// All Sports Index - GET request
exports.sports_index_get = (req, res) => {
    Sports.find()
    .then((sports) => {
        res.render("sports/index", {sports, moment})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    })
};



// Add A Sport - GET form & POST form

// Add Sport GET form
exports.sports_add_get = (req, res) => {
    res.render("sports/add");
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
    Sports.findById(req.query.id)
    .then((sports)=>{
        res.render("sports/detail", {sports, moment});
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
        res.render("sports/edit", {sports, moment})        
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
        res.redirect("/sports/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}