const {Router} = require("express");
const router=  Router();
const {registerUserController, loginUserController, logoutUserController, getMeController}= require("../controllers/auth.controller.js");
const {authMiddleware}= require("../middlewares/auth.middleware.js");
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


/**
 * @route POST /api/auth/logout
 * @description Logout a user by clearing the user cookie and blacklisting the token
 * @access Public
 */
router.post("/logout", logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @description Get current logged-in user details using the token from the cookie
 * @access private
 */
router.get("/get-me", authMiddleware, getMeController)
module.exports= router;