const expressAsyncHandler = require("express-async-handler");
const admin = require("../model/admin");
var jwt = require('jsonwebtoken');
const validateMongodbID = require("../utils/validateMongodbID");

const nodemailer = require('nodemailer');

// ----------------------------------------------------------------
//  Register
// ----------------------------------------------------------------

const adminRegisterCtrl = (req, res) => {

    var randomstring = Math.random().toString(36).slice(-8);
    const Admin = new admin({
        email: req.body.email,
        password: randomstring,
        status: 1,
    });

    admin.findOne({ email: req.body.email }, (err, result) => {
        console.log(result);
        if (result) {
            res.status(500).send({ message: "User alredy exist", status: 501 });
        }
        else {
            Admin.save((err, res) => {
                if (err)
                    console.log(err)
                else
                    console.log(res);
            })

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL, // sender address
                to: req.body.email, // list of receivers
                subject: 'CypherHouse Login Credintial', // Subject line
                html: '<td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody> <tr> <td class="esd-structure es-p40t es-p20b es-p20r es-p20l" align="left" esd-custom-block-id="334499"> <table cellpadding="0" cellspacing="0" width="100%"><tbody> <tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display: block;" width="100"></a> </td></tr><tr><td align="center" class="esd-block-text"> <h2>Login credentials for&nbsp;&nbsp;signing up</h2> </td> </tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr>td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td> </tr> <tr><td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-m-p0r" esd-links-underline="none"><p>Thank you for choosing CypherHouse.</p><p><br></p><p>Your Mail Id :&nbsp;<strong><a target="_blank" href="" style="text-decoration: none;">' + req.body.email + '</a></strong>&nbsp;<br>Your Paasword :' + randomstring + '</p></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr><td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-button es-p10t es-p10b es-m-txt-l"><span class="es-button-border"style="background: #ffffff;"></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td>'  //plain text body
            };

            transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);

                res.status(200).send({ message: "mail sent successfully", status: 201 });
            });
        }
    })

};

/**/
//----------------------------------------------------------------
// Login
//----------------------------------------------------------------

const adminLoginCtrl = (req, res) => {

    admin.findOne({ email: req.body.email }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            console.log(result.isPasswordMatched(req?.body?.password));
            if (!result) {
                res.status(400).send("User not found")
            }
            else {
                if (!result.status) {
                    res.status(400).send("Account blocked");
                }
                else if (result.status) {
                    result.isPasswordMatched(req?.body?.password).then(function (response) {
                        if (response) {
                            var token = jwt.sign(
                                { _id: result._id, email: result.email, password: result.password },
                                process.env.API_SECRET,
                                {
                                    expiresIn: 86400,
                                }
                            );

                            res.status(200).send({ result, status: 201 });
                        } else {
                            res.status(400).send("Wrong password");

                        };
                    }).catch(function (err) {
                        console.log(err);
                    })

                }
            }
        }
    })
};

//-----------------------------------------------------------
// admin password change
//-----------------------------------------------------------

const adminPasswordCtrl = async (req, res) => {
    admin.findOne({ email: req.body.email }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            if (!result) {
                res.status(404).send("User not found");
            }
            else {
                if (!result.status) {
                    res.status(404).send("Account blocked");
                }
                else if (result.status && result.isPasswordMatched(req?.body?.currpassword)) {

                    result.password = req?.body?.newpassword;
                    result.save().then(function (response) {
                        // Handle any possible database errors

                        console.log("This is the Response: " + response);

                        res.status(200).send("password changed");

                    }).catch(function (err) {

                        console.log("we hit an error" + err);
                        res.json({
                            message: 'Database Update Failure'
                        });

                    });

                }
                else {
                    res.status(404).send("Wrong password");
                }
            }
        }
    })
};

//-----------------------------------------------------------
// fetch admin profile
//-----------------------------------------------------------

const adminFetchProfileCtrl = async (req, res) => {
    console.log("called");

    admin.findOne({ email: req.params.email }, (err, result) => {
        console.log(result);
        if (err) {
            res.status(500).send(message = err);
        } else {
            res.status(200).send({ result });
        }
    });
};

//-----------------------------------------------------------
// update admin profile
//-----------------------------------------------------------

const adminProfileUpdateCtrl = expressAsyncHandler(async (req, res) => {
    
    admin.findOne({ email: req.params.email }, (err, result) => {
        if (err) {
            res.status(500).send(message = err);
        }
        else {
            if (!result) {
                res.status(404).send("User not found");
            }
            else {
                if (!result.status) {
                    res.status(404).send("Account blocked");
                }
                else if (result.status) {

                    validateMongodbID(result._id);

                    const user = admin.findByIdAndUpdate(
                        result._id, {

                        name: req?.body?.name,
                        gender: req?.body?.gender,
                        dob: req?.body?.dob

                    }, function (err, docs) {
                        if (err) {
                            res.status(404).send(err)
                        }
                        else {
                            res.status(200).send({ docs, status: 201 });
                        }
                    });

                }
                else {
                    res.status(404).send("Wrong password");
                }
            }
        }
    })
});

module.exports = {
    adminRegisterCtrl,
    adminLoginCtrl,
    adminPasswordCtrl,
    adminFetchProfileCtrl,
    adminProfileUpdateCtrl
};