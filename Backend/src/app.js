const express= require("express")
// require all the routes here
const authRouter= require("./routes/auth.routes.js");
const app= express();
const cookieParser = require("cookie-parser");
const cors= require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));

// use all the routes here
app.use("/api/auth", authRouter);


module.exports= app;