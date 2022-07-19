const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    //res.send("hello world");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res)=>{
    res.send("thanks for posting");
})
app.listen(3000, function(){
    console.log("server is running on port 3000");
})

