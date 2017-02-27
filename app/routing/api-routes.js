var express = require("express");
var router = express.Router();


//import data
var friends = require("../data/friends.js");

router.get('/api', function(req, res) {
    res.json(friends);

});



module.exports = router;