const userModel= require("../models/user.model.js");
const jwt= require("jsonwebtoken")
const bcrypt= require("bcrypt")
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

    const hashedPassword= await bcrypt.hash(password, 10);
    const user= await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token= jwt.sign(
        {user: user._id, username: user.username},
        process.env.JWT_SECRET,
        { expiresIn: "4h"}
    )
    res.cookie("token", token)
    res.status(201).json({
        message: "User registered successfully",
        user:{
            id:user._id,
            username: user.username,
            email: user.email
        }
    })
}

module.exports= {registerUserController}