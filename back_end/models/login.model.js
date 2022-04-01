const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
});

const admin = mongoose.model('Login', userSchema);

module.exports = admin;