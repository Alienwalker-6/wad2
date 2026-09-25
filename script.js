var input = document.getElementById("value");
var endBtn = document.getElementById("endBtn");
var resetBtn = document.getElementById("resetBtn");
var timer = document.getElementById("timer");
var result = document.getElementById("result");
var startTime;
var endTime;
var timeInterval;
var started = false;

input.addEventListener("input", function () {
    if (started == false) {
        startTime = new Date();
        started = true;
        timeInterval = setInterval(function () {
            var currentTime = new Date();
            var timeTaken = (currentTime - startTime) / 1000;
            timer.innerHTML = timeTaken.toFixed(1);
        }, 100);
    }
});

    endBtn.addEventListener("click", function() {
        if (started == false) {
            result.innerHTML = "Please start typing first.";
            return;
        }
        
        clearInterval(timeInterval);
        endTime = new Date();
        
        var timeTaken = (endTime - startTime) / 1000;
        var typedText = input.value;
        var originalText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto";
        var words = typedText.split(" ");
        var correctWords = 0;   
        
        for (var i = 0; i < words.length; i++) {
            if (words[i] == originalText.split(" ")[i]) {
                correctWords++;
            }
        }
        
    var totalWords = originalText.split(" ").length;
    var wpm = (correctWords / timeTaken) * 60;
    timer.innerHTML = timeTaken.toFixed(2);
    result.innerHTML =
        "Time: " + timeTaken.toFixed(2) +
        " seconds<br>" +
        "<br>" +
        "Typing Speed: " + wpm.toFixed(2) + " WPM";
});


resetBtn.addEventListener("click", function() {
    clearInterval(timeInterval);
    input.value = "";
    timer.innerHTML = "0";
    result.innerHTML = "";
    started = false;
});