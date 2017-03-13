var express = require("express");
var router = express.Router();
var path = require("path");


//import data 
var friends = require("../data/friends.js");

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.post('/create', function(req, res) {
	var newFriend = req.body
	var interests = req.body.answers;
	for(i=0;i<interests.length;i++){
		parseInt(interests[i]);
		console.log(interests);
	}
	console.log(interests);

	function myNetflixBro(){
		for(i=0;i<friends.length;i++){
			var answerArr = friends[i].answers;
			var userArr = interests.answers;
			var compatibility = [];
			parseInt(userArr);
			console.log(answerArr);
			console.log(userArr);

			//this can definitely be simplified. 
			function diff(x, y){
				var valueDiff = Math.abs(userArr[x]-answerArr[y]);
				compatibility.push(valueDiff);
			};
			
			//finds difference between 
			diff(0,0);
			diff(1,1);
			diff(2,2);
			
			function getSum(total, num) {
			    return total + num;
			}
			var total = compatibility.reduce(getSum);
			console.log(total);
		};

	};

	myNetflixBro();
	friends.push(newFriend);
	console.log(friends);
	res.redirect("/survey");
});

module.exports = router;