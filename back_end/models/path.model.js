const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pathSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    path: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Path = mongoose.model('Path', pathSchema);

module.exports = Path;