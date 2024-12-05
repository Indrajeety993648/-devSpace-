const jwt  = require("jsonwebtoken");
const User = require("../models/user");

 const userAuth  = async (req, res, next) =>{
     try
     {
        const {token} = req.cookies;
        if(!token){
            throw new Error(" Please  login First !!");
        }
        const  decodedData  =  await  jwt.verify(token , "Indrajeet9936@");
        const {_id} = decodedData;
        const user   = await User.findById(_id);
        if(!user){
            throw new Error(" User not Found !!");
        }
        next();
    }
    catch(error){
        res.status(401).send("Please login First !!" + error.message);
    }
 }
 module.exports = userAuth;