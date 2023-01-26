const { add , sub, mult, divide, sin, cos, tan, random }=require("./data.js");

const process=require("process");

if(process.argv[2]=='add'){
    console.log(add(+process.argv[3],+process.argv[4]));
}

if(process.argv[2]=="sub"){
    console.log(sub(+process.argv[3],+process.argv[4]));
}

if(process.argv[2]=="mult"){

    console.log(mult(+process.argv[3],+process.argv[4]));
}

if(process.argv[2]=="divide"){
    console.log(divide(+process.argv[3],+process.argv[4]));
}

if(process.argv[2]=="sin"){
    console.log(sin(+process.argv[3]));
}

if(process.argv[2]=="cos"){
    console.log(+process.argv[3]);
}

if(process.argv[2]=="tan"){
    console.log(+process.argv[3]);
}

if(process.argv[2]=="random"){
    console.log(random(+process.argv[3],+process.argv[4]));
}

