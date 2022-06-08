const {Team} = require("../models/Team");
const {Sports} = require("../models/Sports")
const {User} = require("../models/User");

const moment = require('moment');
const isLoggedIn = require('../helper/isLoggedIn');


// All Teams Index - GET request
exports.teams_index_get = (req, res) => {
    Team.find().populate('sports')
    .then((teams) => {
        res.render("teams/index", {teams, moment})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    })
};



// Add Team - GET form & POST form

// Add team GET form
exports.teams_add_get = (req, res) => {
    Sports.find()
    .then((sports) => {
        res.render("teams/add", {sports});
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    })
};


exports.teams_add_post = (req, res) => {
    let team = new Team(req.body);
    console.log(req.body)
    console.log(req.body.sports)
    team.save()
    .then(() => {
        
            Sports.findById(req.body.sports, (err, sports) =>{
                sports.teams.push(team);
                sports.save();
            })
            
        
        res.redirect("/teams/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    });
}


// show Team Details - when user clicks on a team
exports.teams_details_get = (req, res) => {
    Team.findById(req.query.id).populate('sports').populate("createdBy")
    .then((team)=>{
        res.render("teams/detail", {team, moment});
    })
    .catch((err)=>{
        console.log(err);
        res.send("sorry there is an error")
    })
    
};

// API for EDIT - GET and PUT

exports.teams_edit_get = (req, res) => {

    Team.findById(req.query.id).populate('sports')
    .then((team) => {
        Sports.find()
            .then((sports) => {
                res.render("teams/edit", {sports, team, moment});
            })
            .catch((err) => {
            console.log(err);
            res.send("Sorry there's an error")
        })
        // res.render("teams/edit", {team, moment})        
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}


exports.teams_edit_put = (req, res) => {
    Team.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/teams/index")
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}





// API for DELETE - GET
exports.teams_delete_get = (req, res) => {
    Team.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/teams/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there was an error");
    })
}

// Need to add this in to DELETE API to remove the Team ID from the sports.teams array, to avoid a bloated dataset.


// sports.teams.splice(index, 1);
// sports.save();

// Something like:
// exports.teams_delete_get = (req, res) => {
//     Team.findByIdAndDelete(req.query.id)
//     .then(() => {
//         Sports.findById(req.body.sports, (err, sports) =>{
//                 let index = sports.teams.indexOf(req.query.id);               
//                 sports.teams.splice(index, 1);
//                 sports.save();
//             }) 
//         res.redirect("/teams/index");
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send("Sorry there was an error");
//     })
// }