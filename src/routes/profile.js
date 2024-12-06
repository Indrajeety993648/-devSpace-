const express  = require("express");

 const profileRouter = express.Router();
  const userAuth = require("../middlewares/auth");

 profileRouter.get("/profile" , userAuth , async(req, res) =>{
    try{
        const user   = req.user;
        if(!user){
            throw new Error("User not found !!");
        }
        res.send(user);
    }
    catch(error){
        res.status(404).send("An error occurred while fetching the user !!");
    }
 })

  module.exports  = profileRouter;