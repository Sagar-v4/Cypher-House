const router = require('express').Router();
let profile = require('../models/admin.model');

router.route('/').get((req, res) => {
    profile.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update-profile').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const date = Date.parse(req.body.date);

    const profile = new profile({
        first_name,
        last_name,
        email,
        dob,
        gender,
        date,
    });

    profile.save()
        .then(() => res.json('Algorithm added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;