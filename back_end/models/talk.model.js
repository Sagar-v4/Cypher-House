const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const talkSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Talk = mongoose.model('Talk', talkSchema);

module.exports = Talk;