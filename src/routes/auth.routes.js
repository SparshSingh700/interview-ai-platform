const {Router} = require("express");
const router=  Router();
const {registerUserController}= require("../controller/auth.controller.js");

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", registerUserController)

module.exports= router;