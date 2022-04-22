const express = require('express');
const contactCtrl= require("../controllers/contactCtrl");

const userRoutes = express.Router();

userRoutes.post("/contact", contactCtrl.sent);


module.exports = userRoutes;