//Dependancies
//===================================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Config
//==================================================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

var htmlRoutes = require("./app/routing/html-routes.js")
// var apiRoutes = require(".app/routing/api-routes.js")
app.use(htmlRoutes);
// app.use(apiRoutes);


//Listener
//==================================================================================
app.listen(PORT, function(){

console.log("App, listening on PORT: " + PORT);
});