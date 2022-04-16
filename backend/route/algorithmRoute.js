const express = require('express');
const {
    addAlgorithmCtrl,
    showAlgorithmCtrl,
    // adminLoginCtrl,
    // fetchUserCtrl,
    // userStatusCtrl,
    // deleteUserCtrl,
    // fetchUserDetailsCtrl,
    // userProfileCtrl,
    // updateUserCtrl,
} = require("../controllers/algorithmCtrl");
const authMiddleware = require('../middlewares/auth/authMiddleware');

const userRoutes = express.Router();

userRoutes.post("/add", addAlgorithmCtrl);
userRoutes.get("/all", showAlgorithmCtrl);
// userRoutes.post("/login", adminLoginCtrl);
// userRoutes.get("/allFaculties", authMiddleware, fetchUserCtrl);
// userRoutes.get("/changeStatus", authMiddleware, userStatusCtrl);
// userRoutes.get("/profile/:id", authMiddleware, userProfileCtrl);
// userRoutes.put("/:id", authMiddleware, updateUserCtrl);
// userRoutes.delete("/:id", deleteUserCtrl);
// userRoutes.get("/:id", fetchUserDetailsCtrl);

module.exports = userRoutes;