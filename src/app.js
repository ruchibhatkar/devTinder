//Creating an express server

//Require the module
const express = require("express");

//Create app
const app = express();

//Multiple route handlers
app.use("/user", [
    (req,res,next) => {
        //res.send("Handling the route user");
        console.log("Handling route user");
        //res.send("1st response"); 
        next();    
    },
    (req,res,next) => {
        console.log("Handling route user 2");
        //res.send("2nd response");
        next();
    }],
    (req,res,next) => {
        next();
        console.log("Handling route user 3");
        //res.send("3rd response"); 
    },
    (req,res,next) => {
        //next();
        console.log("Handling route user 4");
        res.send("4th response"); 
    }
);

//Listen to server
app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});

//npm run dev : for nodemon (provides hot reload)
//npm run start : for node