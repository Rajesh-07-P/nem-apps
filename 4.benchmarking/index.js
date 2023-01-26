const http=require("http");

const fs=require("fs");

const server=http.createServer((req,res)=>{
    if(req.url=="/textsync"){
        fs.readFileSync("./data.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        })
    }

    if(req.url=="/textasync"){
        fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        })
    }
    if(req.url=="/textstream"){
        
    }
})

server.listen(4500,()=>{
    console.log("started server at port 4500");
})