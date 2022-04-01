const router = require('express').Router();
const {authverify} = require('../controller/auth.js');

router.route('/').post(authverify);

module.exports= router;

