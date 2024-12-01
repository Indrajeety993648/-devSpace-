const express =  require('express')
const app  = express();



//  app.use("/user", (req, res) => {
//     res.send(" mai  Badshah hu ")
//  })

app.get("/user?id" , (req, res)  => {
    console.log(req.query);
    res.send({firstName : " Indrajeet " , lastName : "  Yada"})
} ,  (req, res) => {
    res.send("Data  Updated  SuccessFully")
}) 

 app.post("/user", (req , res) => {
     res.send("Data Updated  Succesfully ");
 })

 
// app.use("/hello" , (req, res) => {
//     res.send("hello, I am listening to you ... ")
// })
// app.use("/test" , (req, res) => {
//     res.send("hello, I am test ... ")
// })
// app.use("/" , (req, res) => {
//     res.send("hello, I am  Your  home  ")
// })

 app.listen(3000 ,() => {
    console.log('Server is successfully running on port 3000');
 });

//   console.log('Server is running on port 3000');

