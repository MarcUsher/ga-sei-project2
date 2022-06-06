const mongoose = require('mongoose');



const teamSchema = mongoose.Schema({
    name: String,
    sport: String,
    borough: String,
    description: String,
    minAge: Number,
    level: String,
    contactEmail: String,
    contactPhone: String,
    address: String,
    // createdBy: ref user id
}, {
    timestamps: true
});



const Team = mongoose.model("Team", teamSchema);

module.exports = Team;