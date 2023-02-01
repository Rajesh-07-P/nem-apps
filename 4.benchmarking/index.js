const http=require("http");

const fs=require("fs");

const server=http.createServer((req,res)=>{
    if(req.url=="/textsync"){
        let data=fs.readFileSync("./data.txt",{encoding:"utf-8"});

        res.end(data);
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
        const dataStream=fs.createReadStream("./data.txt","utf-8");

        dataStream.pipe(res);
    }
    if(req.url=="/textpromise"){
        async function read(){
            const data=await fs.promises.readFile("./data.txt","utf-8");
            res.end(data);
        }
        read();
    }
})

server.listen(4500,()=>{
    console.log("started server at port 4500");
})