const express= require("express")
// require all the routes here
const authRouter= require("./routes/auth.routes.js");
const app= express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// use all the routes here
app.use("/api/auth", authRouter);


module.exports= app;