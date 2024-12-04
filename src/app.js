const express = require('express');
const app = express();
const User = require('./models/user');
const connectDB = require('./config/database');

app.use(express.json()); // For parsing JSON request bodies

// Signup API: Create a new user
app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send("User Created Successfully");
    } catch (error) {
        res.status(500).send("An error occurred while saving the user");
    }
});

// Feed API: Get a user by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId; // Use query parameter for GET requests

    // Validate if emailId is provided
    if (!userEmail) {
        return res.status(400).send("Email ID is required");
    }

    try {
        // Using findOne() to get a single user by email
        const user = await User.find({ emailId: userEmail });
        if (!user || user.length === 0) {
            return res.status(404).send("User not found");
        }
        console.log("Data fetched successfully");
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching the user");
    }
});

// Feed API 

 app.get("/feed" , async (req, res) => {


    try{
        const  userData  =  await  User.find({});
        res.send(userData);
    }
    catch (error) {
        console.error(error);
         res.status(500).send("An error  occurred  while fetching the data !!")
    }
 })


 app.delete("/user" , async(req, res) =>{
    const userId  = req.body.userId;
    try{
        const user  =  await   User.findByIdAndDelete(userId);
        res.send("User deleted Successfully!!");
    }
    catch(error){
        console.error(error);
        res.status(500).send("An error occurred while deleting the user");
    }
 })

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
