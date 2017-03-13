//Dependancies
//===================================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Config
//==================================================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

var apiRoutes = require("./app/routing/api-routes.js");
var htmlRoutes = require("./app/routing/html-routes.js");

// var friends = require("./app/data/friends.js");
// app.get('/api', function(req, res) {
    // res.json(friends);

// });
app.use(apiRoutes);
app.use(htmlRoutes);



//Listener
//==================================================================================
app.listen(PORT, function(){

console.log("App, listening on PORT: " + PORT);
});