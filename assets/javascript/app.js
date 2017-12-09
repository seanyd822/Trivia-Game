$(function () {

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


function checkAnswer() {
    $("input:checked").each(function(){
        var checkedValue = $(this).val()
        if (checkedValue == "true") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    })

    unanswered = 5 - (correctAnswers + incorrectAnswers)
    $("#correctAnswers").html(correctAnswers);
    $("#incorrectAnswers").html(incorrectAnswers);
    $("#unanswered").html(unanswered);
}

$(document).on("click", "#doneButton", function(){
    checkAnswer();
})
});


$("#startButton").click(function() {
    $("#startPage").hide();
    $("#triviaPage").show();
});

$("#doneButton").click(function() {
    clearInterval(interval);
    $("#triviaPage").hide();
    $("#resultsPage").show();
});


var counter = 0;
var timeRemaining = 60;
var interval = setInterval(function() {
    counter++;
    $('#timeRemaining').html(timeRemaining - counter);
    if (counter == 60) {
        clearInterval(interval);
        $('#timeUpModal').modal('show');
        $("#modalButton").click(function() {
            $("#doneButton").click();
        });
    }
}, 1000);