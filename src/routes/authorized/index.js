
const express = require("express");
const router = express.Router();
var auth = require("../../middlewares").auth;
const usersRoutes = require("./users.route");

//@route     users
//@desc     inital route
//@access   private
router.use("/users", auth.authenticate, usersRoutes);

module.exports = router;
