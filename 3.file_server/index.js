const fs= require("fs");

const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readdir(".",(err,files)=>{
            if(err){
                res.end("cannot be read");
            }else{
                files.forEach((file)=>{
                    res.write(`<p>${file}</p>`);
                })
                res.end();
            }
        })
    }
    if(req.url=="/public"){
        fs.readdir(`.${req.url}`,(err,files)=>{
            if(err){
                res.end("cannot be read");
            }else{
                files.forEach((file)=>{
                    res.write(`<p>${file}</p>`);
                })
                res.end();
            }
        })
    }
    if(req.url=="/public/other"){
        fs.readdir(`.${req.url}`,(err,files)=>{
            if(err){
                res.end("cannot be read");
            }else{
                files.forEach((file)=>{
                    res.write(`<p>${file}</p>`);
                })
                res.end();
            }
        })
    }
});

server.listen(4500,()=>{
    console.log("server started in port 4500");
})