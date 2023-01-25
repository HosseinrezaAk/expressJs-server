const express = require("express");
const app = express();

app.get("/", function( req, res ){   // req == request , res == response

    res.send("<h1>Hello World</h1>");

});
app.get("/contact", function( req , res ){
    res.send("Contact me at hrakbari77@gmail.com")
});
app.listen(3000, function(){
    console.log("Server started on port http://localhost:3000");
});