const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model.js");

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access. Please login to continue."
        });
    }

    const isTokenBlackListed = await tokenBlacklistModel.findOne({ token });
    if (isTokenBlackListed) {
        return res.status(401).json({
            message: "Unauthorized access. Please login to continue."
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } 
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

module.exports= {authMiddleware};