const express  = require("express");
  const userAuth = require("../middlewares/auth");
 const requestRouter = express.Router();

requestRouter.get("/sendConnectionRequest" , userAuth ,  async(req, res) =>{
    try{
       
    }
    catch(error){
        res.status(404).send("An error occurred while fetching the user !!");
    }
});

 module.exports  = requestRouter;