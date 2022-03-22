const router = require('express').Router();
let apiList = require('../models/talk.model');
let User = require("../models/login.model");

router.route('/send').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const date = Date.parse(req.body.date);

    const newMessage = new message({
        first_name,
        last_name,
        email,
        subject,
        message,
        date
    });

    newMessage.save()
        .then(() => res.json('Message added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    User.register(new User({ email: email }),
        password, function (err, user) {
            if (err) {
                console.log(err);
                return res.render("lets-talk.js");
            }

            passport.authenticate("admin")(
                req, res, function () {
                    res.render("profile.js");
                });
        });
});

module.exports = router;