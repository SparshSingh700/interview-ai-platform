const {Router} = require("express");
const router=  Router();
const {registerUserController, loginUserController}= require("../controller/auth.controller.js");

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", registerUserController)

/**
 * @route POST /api/auth/login
 * @description Login a user using email and password
 * @access Public
 */
router.post("/login", loginUserController)
module.exports= router;