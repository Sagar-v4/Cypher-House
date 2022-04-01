const router = require('express').Router();
const {addAdmin} = require('../controller/addAdmin.js');

router.route('/').post(addAdmin);

module.exports= router;