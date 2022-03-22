const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dp_name: { type: String, required: true },
    dp_path: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: Boolean, required: true },
    dob: { type: Date, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;