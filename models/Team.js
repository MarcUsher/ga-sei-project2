const mongoose = require('mongoose');



const teamSchema = mongoose.Schema({
    name: String,
    sports: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sports'
    },
    borough: String,
    description: String,
    minAge: Number,
    level: String,
    contactEmail: String,
    contactPhone: String,
    address: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});



const Team = mongoose.model("Team", teamSchema);

module.exports = {Team};