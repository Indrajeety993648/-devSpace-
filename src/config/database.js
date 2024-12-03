 const mongoose = require('mongoose');

  const connectDb  = async () => {
    try {
        await mongoose.connect("mongodb+srv://indrajeetyadav993648:betuxyz993648@tutor.mxiy9.mongodb.net/Tutor", {
        });
    } catch (error) {
        console.log("Database Connection Failed");
    }
  }
   module.exports = connectDb;