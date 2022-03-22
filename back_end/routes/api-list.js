const router = require('express').Router();
let apiList = require('../models/algo.model');

router.route('/').get((req, res) => {
  apiList.find()
    .then(algo => res.json(algo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addAlgo').post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const code = req.body.code;
  const path = req.body.path;
  const cast = req.body.cast;
  const used = Number(req.body.used);
  const status = Boolean(req.body.status);
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newAlgorithm = new Algorithm({
    name,
    type,
    code,
    path,
    cast,
    used,
    status,
    description,
    date,
  });

  newAlgorithm.save()
    .then(() => res.json('Algorithm added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addAdmin').post((req, res) => {
  const email = req.body.email;

  // check if this email is valid(exist in system)

  const first_name = "-";
  const last_name = "-";
  const password = email;
  const dp_name = req.body.cast;
  const dp_path = Number(req.body.used);
  const gender = Boolean(req.body.status);
  const status = req.body.description;
  const dob = req.body.description;
  const date = Date.parse(req.body.date);

  const newAlgorithm = new Algorithm({
    name,
    type,
    code,
    path,
    cast,
    used,
    status,
    description,
    date,
  });

  newAlgorithm.save()
    .then(() => res.json('Algorithm added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;