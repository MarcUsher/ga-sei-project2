const mongoose = require('mongoose');


const sportSchema = mongoose.Schema({
    name: String,
    // teams: String,
    boroughs: String,
    description: String,
    imageUrl: String,
    createdBy: String
    // createdBy: ref user id
}, {
    timestamps: true
});

const Sports = mongoose.model("Sports", sportSchema);

module.exports = {Sports};