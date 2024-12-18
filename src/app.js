const express = require('express');
const app = express();
// const User = require('./models/user');
const connectDB = require('./config/database');
const cookieParser  = require("cookie-parser");
app.use(express.json()); 
app.use(cookieParser());
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/requests');


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
connectDB()
    .then(() => {
        console.log("Database Connected Successfully");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Database Connection Failed");
    });
