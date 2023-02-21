const express=require("express")
const app=express();
const fs=require("fs")
const path=require("path")

app.get("/",(req,res)=>{
    // res.send(" i am on te home page")
    res.send('<h1>I am in the Home page.To know something about.How can i help you budy.</h1>')
    res.end();
})

app.get("/gallery",(req,res)=>{
    res.send("<h2>I am on the Gallery.To see want do you want</h2>")
    res.end();

})

app.get("/submit",(req,res)=>{
   res.send("<h3>Your data will be submit,Thank you for Submited..</h3>")
   res.end();
})

app.post("/submit",(req,res)=>{
    res.send("<h4>POST worked</h4>")
    res.end();
    // const content="HELLO";
    // const senderName=req.body.senderName;
    // const message=req.body.message;
    // fs.appendFile(path.join(__dirname,"/message.text"),content,function(err){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     res.send("Data submited")
    // })
})

app.listen(5000,()=>{
    console.log("Application is running in the port of 8000 ")

});