 const mongoose = require('mongoose');

  const connectDb  = async () => {
    try {
        await mongoose.connect("mongodb+srv://Indrajeet_Yadav:betuxyz993648@cluster0.qbu6kc8.mongodb.net/", {
        });
        // console.log("Database Connected Successfully 1");
    } catch (error) {
        console.log("Database Connection Failed");
    }
  }
   module.exports = connectDb;