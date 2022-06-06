const Team = require("../models/Team");
const moment = require('moment');

// All Teams Index - GET request
exports.teams_index_get = (req, res) => {
    Team.find()
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
    res.render("teams/add");
};


exports.teams_add_post = (req, res) => {
    let team = new Team(req.body);
    team.save()
    .then(() => {
        res.redirect("/teams/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry there's an error")
    });
}

// show Team Details - when user clicks on a team
exports.teams_details_get = (req, res) => {
    Team.findById(req.query.id)
    .then((team)=>{
        res.render("teams/detail", {team});
    })
    .catch((err)=>{
        console.log(err);
        res.send("sorry there is an error")
    })
    
};

