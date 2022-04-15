const mongoose = require('mongoose');

const algorithmSchema = new mongoose.Schema({

    name: {
        required: [true, "Name of algorithm is required"],
        type: String,
    },
    type: {
        required: [true, "Type of algorithm is required"],
        type: String,
    },
    code: {
        required: [true, "Code of algorithm is required"],
        type: String,
        unique: [true, "Code of algorithm must be unique"],
    },
    cast: {
        required: [true, "Admin id is required"],
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'admin'
        }],
    },
    used: {
        required: [true, "Used count is required"],
        type: Number,
        default: 0,
    },
    status: {
        required: [true, "Status is required"],
        type: Boolean
    },
    description: {
        required: [true, "Description is required"],
        type: String,
    },
},
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

const Algorithm = mongoose.model('algorithm', algorithmSchema);
module.exports = Algorithm;