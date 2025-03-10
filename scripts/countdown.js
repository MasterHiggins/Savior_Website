//Countdown
var countDownDate = new Date("Feb 28, 2025 11:30:00").getTime();

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

document.getElementById("countdown").innerHTML = formattedTime;

if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Refresh for announcement";
    window.location.href = "2025Overview1.html";
}
}, 1000);

