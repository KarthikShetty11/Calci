const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    //res.send("hello world");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res)=>{
    res.send("thanks for posting");
    console.log(req.body);
})
app.listen(3000, function(){
    console.log("server is running on port 3000");
})

