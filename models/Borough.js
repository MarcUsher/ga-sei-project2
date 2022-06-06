const mongoose = require('mongoose');


const boroughSchema = mongoose.Schema({
    name: String,
    postcodes: String,
    sports: String,
    teams: String,
    // createdBy: ref user id
}, {
    timestamps: true
});


const Borough = mongoose.model("Borough", boroughSchema);

module.exports = Borough;