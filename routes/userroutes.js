// userroutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
 
// Routes
router.post("/", userController.uploadUser, userController.createUser);
router.get("/:userName/:userPassword", userController.checkUserLogin);
router.put("/:userId", userController.uploadUser, userController.updateUser);
 
module.exports = router