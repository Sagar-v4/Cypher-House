const router = require('express').Router();
let message = require('../models/talk.model');

router.route('/').get((req, res) => {
    message.find()
        .then(talk => res.json(talk))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;