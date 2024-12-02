 const express  = require('express');
  const  app = express();

 const connectDB = require('./config/database');

  connectDB()
   .then(() => {
       console.log("Database Connected Successfully");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
   })
   .catch((error) => {
         console.log("Database Connection Failed");
   })