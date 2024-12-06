const  express  = require("express");
const User = require("../models/user");
const validateSignUp = require("../utils/validator");

const  authRouter  = express.Router();

authRouter.post("/signup" , async(req, res) =>{
     const  user   = new User(req.body);
     try{

        // validate the user 
        // bcrypt  the password  so  no can get  the password from the  database ..
        // then  store  hsshed  password in database ..
        // then save the user  in the database ..
        // then send the response to the user  that user is created successfully ..
        
          validateSignUp(req);
          const{fisrtName , lastName , emailId , password} = req.body;
          const  passwordHash  = await bcrypt.hash(password , 10);
          user.password  = passwordHash;

          await user.save();
          res.status(201).send("User Created Successfully");

     }
     catch(error){
        res.status(500).send(" Registration failed ! , Please try again ");
     }
})

module.exports = authRouter;