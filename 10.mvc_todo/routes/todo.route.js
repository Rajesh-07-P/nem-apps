const express=require("express");
const { Todomodel } = require("../models/todo.model");

const todoRouter=express.Router();

todoRouter.get("/",async(req,res)=>{
    const todos=await Todomodel.find({});
    res.send(todos);
})

todoRouter.post("/addtodo",(req,res)=>{
    Todomodel.insertMany(req.body);
    res.send("added todo");
})

todoRouter.patch("/updatetodo/:id",async(req,res)=>{
    const id = req.params.id;
    const payload=req.body;
    console.log(payload);
    await Todomodel.findByIdAndUpdate({_id:id},payload);
    
    res.send("todo updated");
})

todoRouter.delete("/deletetodo/:id",async(req,res)=>{
    const id = req.params.id;
    await Todomodel.findByIdAndDelete({_id:id});

    res.send("deleted");
})

module.exports={todoRouter};