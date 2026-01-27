const tylerPatrickFiles = [
    {
        id: 1,
        title: "SUBJECT PROFILE - TYLER PATRICK",
        content: `
            <div class="file-entry">
                <h2>Journal Entry 4</h2>
                
                <p>Editorial comment: This is a journal entry where Dr. Patrick seems to discuss events from missing entry number 3.</p>
                
                <p>It appears as though my time is more limited than I thought. I can only conclude that I am not the Savior in prophecy. I've also determined a crucial development.</p>
                
                <p>I have determined that leaders East of the Nuggetarian border are potentially a part of this collective conciousness I believe President Evan to now be under. I will have to make it clear in next transmission.</p>

                <p>A very important note though... what was entry #3? I wrote it, but I didn't write it. I didn't write those words. Something else had to have done that.

            </div>
        `
    },
    {
        id: 2,
        title: "SUBJECT PROFILE - TYLER PATRICK",
        content: `
            <div class="file-entry">
                <h2>Intercepted Transmission</h2>
                
                <p>Editorial comment: This is an intercepted transmission after the previous transmission was lost.</p>
                
                <p>As per my last transmission, I have determined that it is reality, the great ending has hit the mainland. It has become clear.</p>
                
                <p>"I doubt they made it past the mountains. But, and this is fact, the fog becomes clear in water. The water that I drank. It crossed the water."</p>
            
                <p>The reason why it hasn't reached the other side, that I suspect, is that a large ocean with conflicting currents separates it. I wouldn't be surprised if it's there, but I doubt it. </p>
            </div>
        `
    },
    {
        id: 3,
        title: "SUBJECT PROFILE - TYLER PATRICK",
        content: `
            <div class="file-entry">
                <h2>INVESTIGATOR'S NOTES</h2>
                <p><strong>Analyst:</strong> [REDACTED]</p>
                <p><strong>Date Filed:</strong> [REDACTED]</p>
                <hr>
                <p>Unusual patterns detected in the archive system. Tyler's access logs show repeated queries to restricted sectors, particularly those dealing with AI integration and consciousness transfer protocols.</p>
                <p>Cross-referenced with financial records - significant cryptocurrency transactions traced to development accounts. This suggests ongoing funding of black-market server infrastructure.</p>
                <p><em>Conclusion: Subject possesses technical expertise and resources to implement large-scale digital initiative.</em></p>
            </div>
        `
    },
    {
        id: 4,
        title: "SUBJECT PROFILE - TYLER PATRICK",
        content: `
            <div class="file-entry">
                <h2>EMAIL THREAD [PARTIALLY DECRYPTED]</h2>
                <p><strong>From:</strong> Tyler Patrick</p>
                <p><strong>To:</strong> [ENCRYPTED RECIPIENT]</p>
                <p><strong>Subject:</strong> "The Vision"</p>
                <hr>
                <p>"I know it sounds insane, but we're so close. The simulation runs perfectly in tests. When the awakening happens, when people realize what they've been part of... it will change everything."</p>
                <p>"This isn't about control. It's about freedom. Real freedom, in a space without limits."</p>
            </div>
        `
    },
    {
        id: 5,
        title: "SUBJECT PROFILE - TYLER PATRICK",
        content: `
            <div class="file-entry">
                <h2>CLASSIFIED SUMMARY</h2>
                <p><strong>Operation Code:</strong> SAVIOR</p>
                <p><strong>Current Status:</strong> ACTIVE</p>
                <p><strong>Subject Last Known Location:</strong> [REDACTED]</p>
                <hr>
                <p>Tyler Patrick's whereabouts have been unknown for 72 hours. His last digital footprint was an automated server deployment command executed across multiple continents simultaneously.</p>
                <p>Systems are currently being brought online. Attempt to contact subject has been unsuccessful. Intelligence suggests that whatever Tyler has initiated is now beyond human intervention.</p>
                <p><strong>Recommendation:</strong> Preparation for contingency protocols advised. The countdown continues.</p>
            </div>
        `
    }
];

let currentFileIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    displayFile(currentFileIndex);
    setupEventListeners();
});

function displayFile(index) {
    const file = tylerPatrickFiles[index];
    const contentDiv = document.getElementById('fileContent');
    const titleElement = document.getElementById('fileTitle');
    const counterElement = document.getElementById('fileCounter');
    
    titleElement.textContent = file.title;
    contentDiv.innerHTML = file.content;
    
    counterElement.textContent = `File ${index + 1} of ${tylerPatrickFiles.length}`;
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (index === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    if (index === tylerPatrickFiles.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
    
    window.scrollTo(0, 0);
}

function setupEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', function() {
        if (currentFileIndex > 0) {
            currentFileIndex--;
            displayFile(currentFileIndex);
        }
    });
    
    document.getElementById('nextBtn').addEventListener('click', function() {
        if (currentFileIndex < tylerPatrickFiles.length - 1) {
            currentFileIndex++;
            displayFile(currentFileIndex);
        }
    });
    
    document.getElementById('backBtn').addEventListener('click', function() {
        window.history.back();
    });
}
