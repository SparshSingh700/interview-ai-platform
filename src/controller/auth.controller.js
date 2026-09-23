const userModel= require("../models/user.model.js");

/**
 * @name registerUserController
 * @description Controller to handle user registration
 * @requires username, email and password
 * @returns {Object} - The registered user object
 */
async function registerUserController(req, res) {
    const {username, email, password}= req.body;

    if(!username|| !email|| !password) {
        return res.status(400).json({message: "Please provide all required fields- username, email and password"});
    }

    const isUserExists= await userModel.findOne({
        $or: [{username}, {email}]
    })

    if(isUserExists){
        if(isUserExists.username=== username){
            return res.status(400).json({message: "User with this username already exists"});
        }
        if(isUserExists.email=== email){
            return res.status(400).json({message: "User with this email already exists"});
        }     
    }
}

module.exports= {registerUserController}