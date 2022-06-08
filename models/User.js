const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be longer than 3 characters"],
        maxlength: [50, "First name must be shorter than 50 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be longer than 3 characters"],
        maxlength: [50, "Last name must be shorter than 50 characters"]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be longer than 6 characters"]
    }
}, {
    timestamps: true
});

userSchema.methods.verifyPassword = function(password) {
    // console.log("Plain Text " + password);
    // console.log("Encrypted password " + this.password);
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = {User};