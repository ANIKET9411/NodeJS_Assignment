const express =require("express");
const fs=require("fs");

const app=express();
const loggingmiddleware=(req,res,next)=>{
    const method=req.method;
    const Url=req.url;
    next();
    const sDate=Date.now();
    const timestamp=Date();
    console.log(method,Url,timestamp);
    res.on("finish",()=>{
        const eDate=Date.now();
        const duration=eDate-sDate;
        console.log(duration);
        const Data= `${method} ${Url} ${timestamp} Time Taken:${duration}\n`;
        console.log(Data+"Aniket Jauhri");
        
        fs.appendFileSync("loggingData.json",Data);
    })

}

app.use(loggingmiddleware);

app.get("/user",(req,res)=>{
   return res.json({
        success:true,
        message:"user api called"
    })
})
app.listen(10000,()=>{
    console.log("App is running on port number 1000");
})