 const express  = require('express');
  const  app = express();
  const  User  = require('./models/user');

 const connectDB = require('./config/database');

 app.post("/signup" ,  async (req, res) => {
    // logic goes here ...
     const userObj = {
        firstName :"Indrajeet ",
        lastName :"Yadav",
        emailId : " indra@gmail.com",
        age: 25,
        password :"123456",
        gender :" Male"
     }
     // creating a  new instance of userModel
     const  user  = new User(userObj);

     await user.save();
     res.send("User Created Successfully");

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
   })