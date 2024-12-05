const express = require('express');
const app = express();
 const bcrypt = require('bcryptjs');
const User = require('./models/user');
const connectDB = require('./config/database');
const validateSignUp  = require('./utils/validator');
const cookieParser  = require("cookie-parser");
app.use(express.json()); // For parsing JSON request bodies
app.use(cookieParser());
const jwt  = require("jsonwebtoken");
const userAuth = require("./middlewares/auth");

// Signup API: Create a new user
app.post("/signup", async (req, res) => {

    const user = new User(req.body);
    // don't rely on request.body .. hackers  can send malicious  data   in our site ..

    try {
    //1 .  Validate  the data  beore creating  a user ...
     validateSignUp(req);

      const { firstName, lastName, emailId, password , age , gender}  = req.body;
      //  Now Encrypt  the password ..
        const passwordHash = await bcrypt.hash(password , 10);
           console.log(passwordHash);
         user.password  = passwordHash;
        await user.save();
        res.status(201).send("User Created Successfully");
    } catch (error) {
        res.status(500).send("An error occurred while saving the user : " + error.message);
    }
});


app.post("/login" , async(req, res) => {
    try{
       const {emailId , password} = req.body;
       const user  = await  User.findOne({emailId});
        if(!user){
             throw new error (" Email  is not  Valid  , Check  your email and try again !!");
        }
         const  isValidPassword =  await bcrypt.compare(password , user.password);
         if(isValidPassword){
                //  Add the token  to cookie  and send the response ....
                const token  = jwt.sign({_id : user._id} , "Indrajeet9936@")
                console.log(token);
                res.cookie("token" , token)
                res.send("Login Successfull !!");
         
         }
         if(!isValidPassword){
            throw new Error("Password is not valid , Check  your password and try again !!");
         }
    }
    catch(error){
         res.status(404).send(" An error  occurred while login !!!" + error.message);
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


app.get("/profile", userAuth, async (req, res) => {
    try {
      // The user has already been verified by the userAuth middleware and attached to req.user
      const user = req.user;
  
      if (!user) {
        throw new Error("User not found!");
      }
  
      // Log the user for debugging purposes
      console.log(user);
  
      // Send a response to the client
      res.send("Reading user profile data!!");
  
    } catch (error) {
      // Send an error message with proper status code
      res.status(404).send("Invalid credentials: " + error.message);
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
 });


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
 });


app.patch("/user" , async(req, res) =>{
    const userId  = req.body.userId;
    const updateData = req.body;
    try{
        const user = await User.findByIdAndUpdate(userId, updateData);
        res.send("User updated successfully!!");
    }
    catch(error){
        console.error(error);
        res.status(500).send("An error occurred while updating the user");
    }
});

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
