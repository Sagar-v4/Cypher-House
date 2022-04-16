const expressAsyncHandler = require("express-async-handler");
const admin = require("../model/admin");
var jwt = require('jsonwebtoken');
const algorithm = require("../model/algorithm");
const generateToken = require("../config/token/generateToken");
const validateMongodbID = require("../utils/validateMongodbID");

const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// ----------------------------------------------------------------
//  Register
// ----------------------------------------------------------------

const addAlgorithmCtrl = (req, res) => {

    algorithm.findOne({ code: req.body.code }, (err, result) => {
        console.log(result);
        if (result) {
            res.status(500).send(message = "Code alredy exist");
        }
        else {
            const Algorithm = new algorithm({
                name: req?.body?.name,
                type: req?.body?.type,
                code: req?.body?.code,
                description: req?.body?.description,
            });
            Algorithm.save((err, res) => {
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
                subject: 'CypherHouse algorith added', // Subject line
                html: '<td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody> <tr> <td class="esd-structure es-p40t es-p20b es-p20r es-p20l" align="left" esd-custom-block-id="334499"> <table cellpadding="0" cellspacing="0" width="100%"><tbody> <tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display: block;" width="100"></a> </td></tr><tr><td align="center" class="esd-block-text"> <h2>Your Algorithm is added</h2> </td> </tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr>td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td> </tr> <tr><td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-m-p0r" esd-links-underline="none"><p>Thank you for choosing CypherHouse.</p><p><br></p><p>Algorithm name :&nbsp;<strong><a target="_blank" href="" style="text-decoration: none;">' + Algorithm.name + '</a></strong>&nbsp;<br>Algorithm code :' + Algorithm.code + '</p></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr><td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-button es-p10t es-p10b es-m-txt-l"><span class="es-button-border"style="background: #ffffff;"></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td>'  //plain text body
            };

            transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);

                res.status(200).send({ message: "mail sent successfully" });
            });
        }
    })

};

/**/
//----------------------------------------------------------------
// show all algorithm
//----------------------------------------------------------------

const showAlgorithmCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.headers);

    algorithm.find({}, (err, result) => {
        if (err) {
            res.status(500).send(message = err);
        } else {
            res.status(200).send({ result });
        }
    });
});

/**/
//-----------------------------------------------------------
// fetch all user = faculties
//-----------------------------------------------------------

const fetchUserCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.headers);
    try {
        const user = await User.find({ role: false });  // fetch all faculties
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});

//-----------------------------------------------------------
// deactivate user
//-----------------------------------------------------------

const userStatusCtrl = expressAsyncHandler(async (req, res) => {
    const { _id } = req?.userId;
    validateMongodbID(_id);

    try {
        const user = await User.findByIdAndUpdate(
            _id, {
            status: req?.body?.status ? false : true,
        },
            {
                new: true,
                runValidators: true
            }
        );
    } catch (error) {
        res.json(error);
    }
    res.send("Delete faculty controller");
});


/*
//-----------------------------------------------------------
// delete faculty
//-----------------------------------------------------------

const deleteFacultiesCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    //check if faculty id is valid
    validateMongodbID(id);

    try {
        const deletedFaculty = await Faculty.findByIdAndDelete(id);
        res.json(deletedFaculty);
    } catch (error) {
        res.json(error);
    }
    res.send("Delete faculty controller");
});


//-----------------------------------------------------------
// faculty details
//-----------------------------------------------------------

const fetchFacultyDetailsCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    //check if faculty id is valid
    validateMongodbID(id);

    try {
        const faculty = await Faculty.findById(id);
        res.json(faculty);
    } catch (error) {
        res.json(error);
    }
});

//-----------------------------------------------------------
// faculty profile
//-----------------------------------------------------------

const facultyProfileCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbID(id);
    try {
        const myProfile = await Faculty.findById(id);
        res.json(myProfile);
    } catch (error) {
        res.json(error);
    }
});

//-----------------------------------------------------------
// update profile
//-----------------------------------------------------------

const updateFacultyCtrl = expressAsyncHandler(async (req, res) => {
    const { _id } = req?.faculty;
    validateMongodbID(_id);

    const faculty = await Faculty.findByIdAndUpdate(
        _id, {
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
    },
        {
            new: true,
            runValidators: true
        }
    );
    console.log(_id);
    res.json(faculty);

});
*/
module.exports = {
    addAlgorithmCtrl,
    showAlgorithmCtrl,
    // adminLoginCtrl,
    // fetchUserCtrl,
    // userStatusCtrl,
    // userProfileCtrl,
    // deleteFacultiesCtrl,
    // fetchFacultyDetailsCtrl,
    // facultyProfileCtrl,
    // updateFacultyCtrl,
};