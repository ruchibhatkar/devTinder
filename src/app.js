//Creating an express server

//Require the module
const express = require("express");

//Create app
const app = express();

//Create request handler functions
app.use("/hello",(req,res)=>{       // "/hello" are called as routes here
    res.end("Namste dev");
});

app.use("/test",(req,res)=>{
    res.end("Hello from the test server");
});

app.use("/api/mine",(req,res)=>{
    res.end("Hello from the API");
});

app.use("/",(req,res)=>{
    res.end("I'm a dashboard");
});

//Listen to server
app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});