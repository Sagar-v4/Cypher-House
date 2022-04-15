const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String
    },
    email: {
        required: [true, "Email is required"],
        type: String,
    },
    password: {
        required: [true, "Password is required"],
        type: String,
    },
    dp_name: {
        type: String
    },
    dp_path: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Path'
        }],
    },
    gender: {
        type: String
    },
    status: {
        type: Boolean,
        default: true,
    },
    dob: {
        type: Date
    },
    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
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

//Hash password 
// adminSchema.pre('save', async function (next) {
//     //hash password
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

//match password 
// adminSchema.methods.isPasswordMatched = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

//Compile the schema into models
const admin = mongoose.model('admin', adminSchema);
module.exports = admin;