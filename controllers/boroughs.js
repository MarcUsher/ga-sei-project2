const Borough = require("../models/Borough");
const moment = require('moment');

// All Boroughs Index - GET request
exports.boroughs_index_get = (req, res) => {
    Borough.find()
    .then((boroughs) => {
        res.render("boroughs/index", {boroughs, moment})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    })
};



// Add Borough - GET form & POST form

// Add borough GET form
exports.boroughs_add_get = (req, res) => {
    res.render("boroughs/add");
};


exports.boroughs_add_post = (req, res) => {
    let borough = new Borough(req.body);
    borough.save()
    .then(() => {
        res.redirect("/boroughs/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    });
}

// show Borough Details - when user clicks on a borough
exports.boroughs_details_get = (req, res) => {
    Borough.findById(req.query.id)
    .then((borough)=>{
        res.render("boroughs/detail", {borough, moment});
    })
    .catch((err)=>{
        console.log(err);
        res.send("sorry there is an error")
    })
    
};



// API for EDIT - GET and PUT

exports.boroughs_edit_get = (req, res) => {

    Borough.findById(req.query.id)
    .then((borough) => {
        res.render("boroughs/edit", {borough, moment})        
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}


exports.boroughs_edit_put = (req, res) => {
    Borough.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/boroughs/index")
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}




// API for DELETE - GET
exports.boroughs_delete_get = (req, res) => {
    Borough.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/boroughs/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}