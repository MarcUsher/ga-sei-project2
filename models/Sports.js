const mongoose = require('mongoose');


const sportSchema = mongoose.Schema({
    name: String,
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    boroughs: String,
    description: String,
    imageUrl: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Sports = mongoose.model("Sports", sportSchema);

module.exports = {Sports};