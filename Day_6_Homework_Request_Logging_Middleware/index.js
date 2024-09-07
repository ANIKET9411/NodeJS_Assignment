const express=require("express");
const morgan = require("morgan");

const app=express();
const requestLogger=(req,res,next)=>{
    const timestamp=Date();
    console.log(`IP:${req.ip} TimeStamp:${timestamp}`);
    next();
}
app.use(requestLogger);
app.use(morgan("dev"));
app.get("/product-list",(req,res)=>{
const products=[{
    name:"T-shirt",
    qty:4
},
{
    name:"Shirt",
    qty:8
},
{      
    name:"Trousers",
          qty:10  
},
{      name:"Jeans",      qty:12  },
{      name:"Lower",      qty:2  },
{      name:"Cap",      qty:5  }]
res.json({
    success:true,
    result:products
})
})

app.get("/user",(req,res)=>{
    res.json({
        success :true,
        result:"Logged in successfully"
    })
})
app.listen(10000,()=>{
    console.log("Server is running in port number 10000");
})