console.log("inside js");

var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var question = 0;
var question = 0;
var images;
var count = 30;

var autoQuestion = [{
		question: "In what year was the Call of Duty Jeep Wrangler vehicle made ?",
		choices: ["2013", "2016", "2012", "2016"],
		images: ["../images/jeepca.jpg"],
		validAnswer: 2

	},

	{ 
		question: "In what year was the 100th year Anniversary Harley Davidson made ?",
		choices: ["2002", "2003", "2000", "2005"],
		images: ["../images/harleydavidsonca.jpg"],
		validAnswer: 1
	},

	{ 
		question: "In what year was the Ford Mustang Fastback Pit Viper made ?",
		choices: ["1965", "1967", "1969", "1966"],
		images: ["../images/mustangca.jpg"],
		validAnswer: 1
	},


	{ 
		question: "In what year was the first Hummer H3T truck made ?",
		choices: ["2005", "2008", "2006", "2010"],
		images: ["../images/hummerca.jpg"],
		validAnswer: 1
	},

	{ 
		question: "In what year was the Porsche 911 Limited Edition Turbo S only 500 units made ?",
		choices: ["2017", "2016", "2015", "2018"],
		images: ["../images/nineeleven.jpg"],
		validAnswer: 0
	}


];

	$("start_button").click(function(){
		console.log("button clicked");
		$(this).hide();
		counter = setInterval(timer, 1000);
		displayTrivia();
	});

	


	function timer(){
		count--;
		if (count <=0) {
		clearInterval(counter);
		return;
		}
		$("#timer").html("Time remaing: " + "00:" + count + " secs");
	}

 	


 	function displayTrivia(){
 		$("question_div").html(autoQuestion[0].question);
 		question++;
 

	var choicesArr = autoQuestion[0].choices;
	var buttonsArr = [];

	  for (let i = 0; i < choicesArr.length; i++) {
    		var button = $('<button>');
    		button.text(choicesArr[i]);
    		button.attr('data-id', i);
    		$('#choices_div').append(button);
   	}

  } 

 			$('#choices_div').on("click", "button", function(e){
 			userPick = $(this).data("id");
 			autoQuestion[0].validAnswer;
 			if(userPick != autoQuestion[0].validAnswer) {

 			$('#choices_div').text("Wrong Answer! The correct answer was " + correct);
 			incorrectAnswer++;

		} 	else if (userPick === autoQuestion[0].validAnswer) {
			$('#choices_div').text("Correct!!! The correct answer is " + correct);
			correctAnswer++;

}

});











