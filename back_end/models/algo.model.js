const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const algorithmSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    path: { type: String, required: true },
    cast: { type: String, required: true },
    used: { type: Number, required: true },
    status: { type: Boolean, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = Algorithm;