const express = require('express');
const {
    adminRegisterCtrl,
    adminLoginCtrl,
    // fetchUserCtrl,
    // userStatusCtrl,
    // deleteUserCtrl,
    // fetchUserDetailsCtrl,
    // userProfileCtrl,
    // updateUserCtrl,
} = require("../controllers/adminCtrl");
const authMiddleware = require('../middlewares/auth/authMiddleware');

const userRoutes = express.Router();

userRoutes.post("/register", adminRegisterCtrl);
userRoutes.post("/login", adminLoginCtrl);
// userRoutes.get("/allFaculties", authMiddleware, fetchUserCtrl);
// userRoutes.get("/changeStatus", authMiddleware, userStatusCtrl);
// userRoutes.get("/profile/:id", authMiddleware, userProfileCtrl);
// userRoutes.put("/:id", authMiddleware, updateUserCtrl);
// userRoutes.delete("/:id", deleteUserCtrl);
// userRoutes.get("/:id", fetchUserDetailsCtrl);


module.exports = userRoutes;