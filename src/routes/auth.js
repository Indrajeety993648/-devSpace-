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
});


/// login Api 
 authRouter.post("/login" , async(req, res) =>{
    try{
        const {emailId , password} = req.body;
        const user   = await User.findOne({emailId});
        if(!user){
            throw new Error("Invalid Credentials, Please try again !!");
        }
        const isValidPassword = await bcrypt.compare(password , user.password);
        if(isValidPassword){
            const token  = jwt.sign({_id :user._id} , "Indrajeet9936@");
            res.cookie("token" , token);
            res.send("Login Successfull ");
        }
        if(!isValidPassword){
            throw new Error("Invalid Credentials, Please try again !!");
        }

    }
    catch(error){
        res.status(404).send("An error occurred while login !!");
    }
 })

 

module.exports = authRouter;