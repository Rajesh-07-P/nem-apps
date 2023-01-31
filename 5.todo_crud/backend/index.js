const express=require("express");

const fs=require("fs");

const app=express();

app.get("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");

    const parsed_data=JSON.parse(data);

    console.log(parsed_data);

    res.end("data is received");
})


app.post("/",(req,res)=>{

})
app.put("/",(req,res)=>{

})
app.delete("/",(req,res)=>{

})

app.listen(4500,()=>{
    console.log("server started at port 4500");
})