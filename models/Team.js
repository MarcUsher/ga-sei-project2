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
    // createdBy: ref user id
}, {
    timestamps: true
});



const Team = mongoose.model("Team", teamSchema);

module.exports = {Team};