var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req,res){
    var friends = ["tony", "miranda", "justin", "piere"];
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req,res){
    console.log(res);
    console.log(res.query);
    console.log(req);
    res.send("you have reached post route!");
});



app.get("/fallinlovewith/:thing", function(req,res){
    var thing =req.params.thing;
    res.render("love.ejs");
    res.send("you fell in love with " + thing);
});

app.listen(3000, function(){
    console.log("server started!!");
});
