//looping over friends to compare answers
//output----> yogi bear diff = 2      bubbles = 4
// var friends = [
// {
// 	name: "Yogi",
// 	photo: "bears.com",
// 	answers: [5,1,3]

// },

// {
// 	name: "bubbles",
// 	photo: "dbz.com",
// 	answers: [3,2,4]
// }
// ]

// var userInput = {
// 	name: "tim",
// 	photo: "dont matter",
// 	answers: [5,1,5]
// }

function myNetflixBro(){
	for(i=0;i<friends.length;i++){
		var answerArr = friends[i].answers;
		var userArr = interests.answers;
		var compatibility = [];
		console.log(answerArr);
		console.log(userArr);

		//this can definitely be simplified. 
		function diff(x, y){
			var valueDiff = Math.abs(userArr[x]-answerArr[y]);
			compatibility.push(valueDiff);
		};
		
		//finds difference between userArr and existing friends
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

module.exports = myNetflixBro();

