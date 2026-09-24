const {Router} = require("express");
const router=  Router();
const {registerUserController, loginUserController}= require("../controller/auth.controller.js");

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", registerUserController)
router.post("/login", loginUserController)
module.exports= router;