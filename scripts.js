//Changelog
fetch('changelogs/Placeholder.txt')
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
