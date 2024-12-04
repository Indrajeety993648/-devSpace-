 const express  = require('express');
  const  app = express();
  const  User  = require('./models/user');

 const connectDB = require('./config/database');


 app.use(express.json());
 app.post("/signup" ,  async (req, res) => {

    // Creating  a new instance  of the  User model....
    const user  = new  User(req.body);
    try {
        await user.save();
        res.status(201).send("User Created Successfully");
    } catch (error) {
        res.status(500).send(" An error  occurred while saving the user");
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
   })   

   