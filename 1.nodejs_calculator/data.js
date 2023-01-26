const crypto=require("crypto");

const add=(a,b)=>{
    return a+b;
}

const sub=(a,b)=>{
    return a-b;
}

const mult=(a,b)=>{
    return a*b;
}

const divide=(a,b)=>{
    return a/b;
}

const sin=(a)=>{
    return Math.sin(a);
}

const cos=(a)=>{
    return Math.cos(a);
}

const tan=(a)=>{
    return Math.tan(a);
}

const random=(a,b)=>{
    return crypto.randomInt(a,b);
}

module.exports={add,sub,mult,divide,sin,cos,tan,random}