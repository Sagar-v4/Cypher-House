const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const algorithmTypeSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    status: { type: Boolean, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const algoType = mongoose.model('Algo-type', algorithmTypeSchema);

module.exports = algoType;