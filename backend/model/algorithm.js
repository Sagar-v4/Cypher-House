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
    admin: {
        // required: [true, "Admin id is required"],
        
            type: String,
            required:[true,"Enter admin email id"]
        ,
    },
    used: {
        type: Number,
        default: 0,
    },
    status: {
        type: Boolean,
        default: true,
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

const algorithm = mongoose.model('algorithm', algorithmSchema);
module.exports = algorithm;