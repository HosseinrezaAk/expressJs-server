const express = require("express");
const bodyParser = require("body-parser"); // npm install body-parser

const app = express();
app.use(bodyParser.urlencoded({extended: true}));  // urlencoded special type when data passing from html form . extended = true : allows us to post nested objects


app.get("/", function( req, res ){
    res.sendFile(__dirname + "/index.html");
});

// Whenever a post method called with action of "/" below method will be called
app.post("/", function( req, res){
    // console.log(req.body)  // this will show the variables got send from the HTML FORM.
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is :" + result);
});

app.get("/bmicalculator", function( req , res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function( req , res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = height/Math.pow( weight , 2 );
    res.send("The BMI is : " + bmi);

});
app.listen(3000, function(){
    console.log("Server started on port http://localhost:3000");
});