console.log("inside js");



$.fn.autoGame = function() {

var game = this;

	game.userSelection = null;
 	game.answers = {
        correct: 0,
        incorrect: 0
    };
    
    game.images;
    game.count = 30;
    game.current = 0;

    game.autoQuestion = [{
		question: "In what year was the Call of Duty Jeep Wrangler vehicle made ?",
		choices: ["2013", "2016", "2012", "2016"],
		images: ["../images/jeepca.jpg"],
		correct: 2

	},

	{ 
		question: "In what year was the 100th year Anniversary Harley Davidson made ?",
		choices: ["2002", "2003", "2000", "2005"],
		images: ["../images/harleydavidsonca.jpg"],
		correct: 1
	},

	{ 
		question: "In what year was the Ford Mustang Fastback Pit Viper made ?",
		choices: ["1965", "1967", "1969", "1966"],
		images: ["../images/mustangca.jpg"],
		correct: 1
	},


	{ 
		question: "In what year was the first Hummer H3T truck made ?",
		choices: ["2005", "2008", "2006", "2010"],
		images: ["../images/hummerca.jpg"],
		correct: 1
	},

	{ 
		question: "In what year was the Porsche 911 Limited Edition Turbo S only 500 units made ?",
		choices: ["2017", "2016", "2015", "2018"],
		images: ["../images/nineeleven.jpg"],
		correct: 0
	}


];

game.ask = function() {
        if (game.autoQuestion[game.current]) {
            $("#timer").html("Time remaining: " + "00:" + game.count + " seconds");
            $("#question_div").html(game.autoQuestion[game.current].question);
            var choicesArr = game.autoQuestion[game.current].choices;
            var buttonsArr = [];

            for (var i = 0; i < choicesArr.length; i++) {
                var button = $('<button>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#choices_div').append(button);
            }
            window.gameCounter = setInterval(game.timer, 1000);
        } else {
            $('body').append($('<div />', {
                text: 'Unanswered: ' + (
                    game.autoQuestion.length - (game.answers.correct + game.answers.incorrect)),
                class: 'result'
            }));
            $('#start_button').text('Restart').appendTo('body').show();
        }
    };




    game.timer = function() {
        game.count--;
        if (game.count <= 0) {
            setTimeout(function() {
                game.nextQuestion();
            });

        } else {
            $("#timer").html("Time remaining: " + "00:" + game.count + " seconds");
        }
    };



    game.nextQuestion = function() {
        game.current++;
        clearInterval(window.gameCounter);
        game.count = 30;
        $('#timer').html("");
        setTimeout(function() {
            game.cleanUp();
            game.ask();
        }, 4000)
    };




    game.cleanUp = function() {
        $('div[id]').each(function(item) {
            $(this).html('');
        });
        $('.correct').html('Correct answers: ' + game.answers.correct);
        $('.incorrect').html('Incorrect answers: ' + game.answers.incorrect);
    };




    game.answer = function(correct) {
        var string = correct ? 'Correct' : 'Incorrect';
        game.answers[string]++;
        $('.' + string).html(string + ' answers: ' + game.answers[string]);
    };

    return game;
};





var triviaGame;

$("#start_button").click(function() {
    $(this).hide();
    $('.result').remove();
    $('div').html('');
    triviaGame = new $(window).autoGame();
    triviaGame.ask();
});







$('#choices_div').on('click', 'button', function(e) {
    var userSelection = $(this).data("id"),
        game = triviaGame || $(window).game(),
        index = game.autoQuestion[game.current].correct,
        correct = game.autoQuestion[game.current].choices[index];

    if (userSelection !== index) {
        $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
        game.answer(false);
    } else {
        $('#choices_div').text("Correct!!! The correct answer was: " + correct);
        game.answer(true);
    }
    game.nextQuestion();
});













