const express = require('express');
const {
    apiCtrl,
} = require("../controllers/apiCtrl");

const apiRoutes = express.Router();

apiRoutes.post("/", apiCtrl);

module.exports = apiRoutes;