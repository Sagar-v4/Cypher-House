var jwt = require('jsonwebtoken');
const admin = require('../models/admin.model');

const bcrypt = require('bcrypt');

exports.authverify = (req, res) => {
    admin.findOne({ email: req.body.email }, (err, result) => {
        if (err) {
            res.status(500).send(message = err);
        }
        else {
            if (!result) {
                res.status(404).send("User not found")
            }
            else {
                if(bcrypt.compareSync(req.body.password,result.password))
                {
                var token = jwt.sign(
                    { _id: result._id, email: result.email, password: result.password },
                    process.env.API_SECRET,
                    {
                        expiresIn: 86400,
                    }
                );

                res.status(200).send({
                    user: {
                        _id: result._id, email: result.email, password: result.password
                    },
                    message: "Login sucessfull",
                    accessToken: token
                });}
                else{
                    res.status(404).send("Wrong password")
                }
            }
        }
    })
};
