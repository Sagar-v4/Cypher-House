const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dp_name: { type: String  },
    dp_path: { type: String },
    gender: { type: String },
    status: { type: Boolean, required: true },
    dob: { type: Date },
    date: { type: Date },
}, {
    timestamps: true,
});

const admin = mongoose.model('Admin', adminSchema);
module.exports = admin;