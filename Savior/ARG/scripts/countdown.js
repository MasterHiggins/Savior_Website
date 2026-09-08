//Countdown
var startDate = new Date("January 20, 2026 00:00:00").getTime();
var countDownDate = new Date("May 22, 2026 00:00:01").getTime();
var totalMinutes = (countDownDate - startDate) / (1000 * 60);

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var formattedTime = (days < 10 ? "0" + days : days) + ":" +
                    (hours < 10 ? "0" + hours : hours) + ":" +
                    (minutes < 10 ? "0" + minutes : minutes) + ":" +
                    (seconds < 10 ? "0" + seconds : seconds);

var minutesRemaining = distance / (1000 * 60);
var minutesElapsed = totalMinutes - minutesRemaining;
var percentageElapsed = minutesElapsed / totalMinutes;

percentageElapsed = Math.max(0, Math.min(1, percentageElapsed));

var r = 255;
var g = Math.round(255 * (1 - percentageElapsed));
var b = Math.round(255 * (1 - percentageElapsed));

var color = "rgb(" + r + ", " + g + ", " + b + ")";

document.getElementById("countdown").innerHTML = formattedTime;
document.getElementById("countdown").style.color = color;

if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Doomsday";
    document.getElementById("countdown").style.color = "rgb(255, 0, 0)";
    window.location.href = "Fall2025Updates.html";
}
}, 1000);

