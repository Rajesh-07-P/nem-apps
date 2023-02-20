const express=require("express");
const { authentication } = require("../middlewares/auth.middleware");
const { PostModel } = require("../models/posts.model");

const postRouter=express.Router();
postRouter.use(authentication);

postRouter.post("/post",async(req,res)=>{
    const payload=req.body;
    try{
        let post =new PostModel(payload);
        await post.save();
        res.send("posted successfully");
    }catch(err){
        console.log(err);
        res.send("something went wrong while posting");
    }
})

postRouter.get("/",async(req,res)=>{
    try{
        let posts=await PostModel.find();
        res.send(posts);
    }catch(err){
        console.log(err);
        res.send("Cannot fetch posts");
    }
})

module.exports={
    postRouter
}