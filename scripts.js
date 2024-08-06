//Changelog
fetch('changelogs/PublicBeta01.txt')
    .then(response => response.text())
    .then(changelogText => displayChangelog(changelogText))
    .catch(error => console.error('Error fetching changelog:', error));

function displayChangelog(changelogText) {
    const changelogDiv = document.getElementById('changelog');
    const lines = changelogText.split('\n');

    for (const line of lines) {
        if (line.startsWith('Changes Since') || (line.startsWith('Update Version')) || (line.startsWith('Public Beta'))) {
            const heading = document.createElement('h1');
            heading.textContent = line;
            changelogDiv.appendChild(heading);
        } else if (
                    line.startsWith('Content Additions') || 
                    line.startsWith('Gameplay Tweaks') || 
                    line.startsWith('Bug Fixes') || 
                    line.startsWith('Known Issues') ||
                    line.startsWith('Release Dates')
                ) {
            const boldHeading = document.createElement('strong');
            boldHeading.textContent = line;
            changelogDiv.appendChild(boldHeading);
        } else if (line.startsWith('-')) {
            const listItem = document.createElement('li');
            listItem.textContent = line.substring(1);
            changelogDiv.appendChild(listItem);
        } else {
            const paragraph = document.createElement('p');
            paragraph.textContent = line;
            changelogDiv.appendChild(paragraph);
        }
    }
}

//Countdown
var countDownDate = new Date("Aug 13, 2024 18:30:00").getTime();

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
    window.location.href = "index.html";
}
}, 1000);

