//Creating an express server

//Require the module
const express = require("express");

//Create app
const app = express();

//Create request handler functions
// app.use("/hello",(req,res)=>{       // "/hello" are called as routes here
//     res.end("Namste dev");
// });

// app.use("/test",(req,res)=>{
//     res.end("Hello from the test server");
// });

// app.use("/api/mine",(req,res)=>{
//     res.end("Hello from the API");
// });

// app.use("/",(req,res)=>{
//     res.end("I'm a dashboard");
// });

//Handling different types of API using postman
// app.post("/user",(req,res) => {
//     res.end("Data saved to database successfully");
// });

// app.get("/user",(req,res) => {
//     res.end("I am GET API");
// });

// app.delete("/user",(req,res) => {
//     res.end("Data deleted successfully");
// }); 

// app.put("/user",(req,res) => {
//     res.end("Data updated successfully by PUT API");
// });

// app.patch("/user",(req,res) => {
//     res.end("Data updated by successfully by PATCH API");
// });

// app.use("/user",(req,res) =>{
//     res.end("HAHAHAHAHA");
// });

//Playing with routes
app.get("/user/:userId",(req,res) => {
    console.log(req.params);            //Prints dynamic parameters
    res.end("Hello from test server");
});

// /user?userId=707&password=testing
app.get("/user",(req,res) => {
    console.log(req.query);             //Helps to get query paramters
    res.end("Hello from test server");
});

//Listen to server
app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});

//npm run dev : for nodemon (provides hot reload)
//npm run start : for node