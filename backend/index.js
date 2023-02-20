const express=require("express");
const { connection } = require("./config/db");
const { postRouter } = require("./routes/posts.route");
const { userRouter } = require("./routes/users.route");
require("dotenv").config();
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("home page");
})

app.use("/users",userRouter);
app.use("/posts",postRouter);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db");
    }catch(err){
        console.log(err);
        console.log("error in connecting to db");
    }
    console.log(`server started at port ${process.env.port}`);
})



//   {
//     "name":"Rajesh",
//     "email":"rajesh@gmail.com",
//     "gender":"Male",
//     "password":"rajesh@123"
//   }