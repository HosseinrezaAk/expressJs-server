const express = require("express");
const app = express();


app.get("/", function( req, res ){
    res.sendFile(__dirname + "/index.html");
});

// Whenever a post method called with action of "/" below method will be called
app.post("/", function( req, res){
    res.send("Hi");
});
app.listen(3000, function(){
    console.log("Server started on port http://localhost:3000");
});