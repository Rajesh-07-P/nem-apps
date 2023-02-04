const express=require("express");

const multer=require("multer");

const cors=require("cors");

const app=express();

app.use(cors());

const upload=multer({
    dest:'uploads'
})
app.post("/upload",upload.single('uploads'),(req,res)=>{
    console.log(req.file);
    res.send("file uploaded");
})

app.listen(3500,()=>{
    console.log("Server started at port 3500");
})