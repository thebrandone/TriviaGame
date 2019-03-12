$(document).ready(function() {

var questionsArr = [
    "Who was the first president?",
    "Who wrote the constitution?",
    "Which WAS NOT an original 13 colony?",
    "Which amendment to the constitution abolished slavery?",
    "Who served the most amount of terms as president?",
    "What is our national anthem?",
    "How many senators does the Senate always have?",
    "How is the president elected?"
];

var answersObj = {
    oneQ: ["George Washington", "Benjamin Franklin", "Thomas Edison", "Samuel Jackson"],
    twoQ: ["John Adams", "James K. Polk", "James Madison", "Thomas Jefferson"],
    threeQ: ["Pennsylvania", "New Jersey", "New York", "Florida"],
    fourQ: ["13th", "10th", "19th", "3rd"],
    fiveQ: ["James Garfield", "Franklin Delano Roosevelt", "George Washington", "Abraham Lincoln"],
    sixQ: ["The Star-Spangled Banner", "God Save the Queen", "Gucci Gang", "Twilight's Last Gleaming"],
    sevenQ: ["Twenty-five", "One hundred", "Five hundred thrity-five", "Fifty"],
    eightQ: ["Popular vote", "Congress", "Electoral College", "Rap battle"]
}

var correctAnswers = [
    "George Washington",
    "James Madison",
    "Florida",
    "13th",
    "Franklin Delano Roosevelt",
    "The Star-Spangled Banner",
    "One hundred",
    "Electoral College"
];

var keys = [];

for (var prop in answersObj) {
    keys.push(prop);
}

var correct = 0;
var incorrect = 0;
var unanswered = 0;
//how many questions gone through -- used to iterate through questions
var gonethru = 0;
//used later on in a loop to see if the user has clicked
var clicked = false;

$("#time").hide();

function displayQuestions(arr, i) {
    $("#triviaQuestion").empty();
    $("#triviaQuestion").text(arr[i]);
}

function displayAnswers(arr) {
    $("#answers").empty();
    for (i = 0; i < arr.length; i++) {
        $("#answers").append("<p class='answer' data-answer='" +arr[i] + "'>" + arr[i]);
    }
}


$(document).on("click", "#start", function() {
    $("#start").hide();
    $("#time").show();

    //displays the first question and answers
    displayQuestions(questionsArr, 0);
    displayAnswers(answersObj.oneQ);
    gonethru++;

    $(document).on("click", ".answer", function() {
        
        //check to see if clicked answer is correct
        for (i = 0; i < answersObj[keys[gonethru-1]].length; i++) {
            for (k = 0; k < correctAnswers.length; k++) {
                if ($(this).data("answer") === answersObj[keys[gonethru-1]][i] && $(this).data("answer") === correctAnswers[k]) {
                    correct++;
                    console.log("correct " + correct);
                }
            }
        }

        clicked = true;
        if (gonethru === 1 && clicked === true) {
            displayQuestions(questionsArr, gonethru);
            displayAnswers(answersObj[keys[gonethru]]);
            gonethru++;
            clicked = false;

        }    
        for (k = 1; k < 8; k++) {
            if (gonethru === k && clicked === true) {
                displayQuestions(questionsArr, gonethru);
                displayAnswers(answersObj[keys[gonethru]]);
                gonethru++;
                clicked = false;
            }
        } 
    });

});

});