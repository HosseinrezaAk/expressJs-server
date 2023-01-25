const express = require("express");
const app = express();

app.get("/", function( req, res){   // req == request , res == response

    res.send("hello");

})
app.listen(3000, function(){
    console.log("Server started on port http://localhost:3000");
});