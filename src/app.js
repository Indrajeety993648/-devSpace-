const express =  require('express')
const app  = express();



//  app.use("/user", (req, res) => {
//     res.send(" mai  Badshah hu ")
//  })

// app.get("/user?id" , (req, res)  => {
//     console.log(req.query);
//     res.send({firstName : " Indrajeet " , lastName : "  Yada"})
// } ,  (req, res) => {
//     res.send("Data  Updated  SuccessFully")
// }) 

//  app.post("/user", (req , res) => {
//      res.send("Data Updated  Succesfully ");
//  })


// app.use("/hello" , (req, res) => {
//     res.send("hello, I am listening to you ... ")
// })
// app.use("/test" , (req, res) => {
//     res.send("hello, I am test ... ")
// })
// app.use("/" , (req, res) => {
//     res.send("hello, I am  Your  home  ")
// })



// we can  send multiple  route handlers  in a  single route  , we can send  some route 
//  handlers  inside array  and some  outside array 


// app.use("/user" , [rh1 , rh2 ], rh3, rh4 .....)
 app.use(
    "/user" ,
     (req, res , next) =>{
      console.log( " Route 1  is working ")
      next();
    //   res.send("route 1 is working ");
    } ,
    (req, res , next) => {
         console.log(" Route 2 is working ");
         next();
    },
    (req, res, next) => {
        console.log(" Route 3 is working ");
        res.send("Route 3 is working ");
    })
 app.listen(3000 ,() => {
    console.log('Server is successfully running on port 3000');
 });

//   console.log('Server is running on port 3000');

