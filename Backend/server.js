require("dotenv").config();
const app= require("./src/app")
const connectDB= require("./src/config/database")

const startServer = async () => {
    await connectDB();

    app.listen(3000, () => {
        console.log("Server is running at 3000");
    });
};

startServer();
