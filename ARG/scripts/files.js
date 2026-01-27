const apocalypseFiles = [
    {
        number: "FILE-2024-001",
        name: "Initial Event Documentation",
        subject: "First Recorded Anomaly",
        author: "Dr. Sarah Chen",
        contents: "At approximately 14:32, monitoring stations worldwide detected an unusual electromagnetic pulse originating from coordinates [REDACTED]. The magnitude was unprecedented, yet conventional instruments failed to provide accurate readings. Subsequent analysis suggests the event was not of natural origin.\n\nSeismic activity remained minimal, but atmospheric disturbances were recorded across the continent. Temporal anomalies were noted in sensor data, with some equipment registering timestamps that predated the actual event by several hours.\n\nRecommendation: Establish containment protocols and increase monitoring frequency."
    },
    {
        number: "FILE-2024-002",
        name: "Subject Investigation Report - Tyler Patrick",
        subject: "Pattern Recognition Anomalies",
        author: "Agent James Morrison",
        contents: "The individual named Tyler Patrick is of interest to President Evan due to his knowledge. His wehereabouts exactly aren't known and it is unsafe to track him, but they remain of interest to the government."
    },
    {
        number: "FILE-2024-003",
        name: "Theoretical Framework Analysis",
        subject: "Causality Breakdown",
        author: "Dr. Marcus Wilhelm",
        contents: "The initial event appears to have introduced localized causality violations. While global causality remains intact, specific regions show temporal inconsistencies.\n\nProposed Theory: The event may have created a cascade of parallel timeline echoes. Evidence suggests information is leaking between timelines, explaining Subject Patrick's temporal awareness.\n\nKey Observations:\n- Temporal markers in digital logs show inconsistencies\n- Radio telescopes detected signals matching descriptions of the initial event from FUTURE dates\n- DNA samples from ground zero show molecular decay patterns spanning 2-3 years\n\nThis is not a containable situation. This is an ongoing process."
    },
    {
        number: "FILE-2024-004",
        name: "Worldwide Impact Assessment",
        subject: "Global Ramifications",
        author: "Director Robert Hayes",
        contents: "Governments worldwide have begun to notice. Multiple nations report unusual phenomena:\n\n We have successfully reached King Nugget, however he says that the creatures in his area are the same. Though, [REDACTED] says that the animals have become unusual. Large worms, shadow monsters, it's stuff out of fairy tales is how [REDACTED] described it."
    },
    {
        number: "FILE-2024-005",
        name: "Communication Log - Unknown Signal",
        subject: "Unidentified Source Transmissions",
        author: "Communications Officer Dr. Lin Wu",
        contents: "[SIGNAL ANALYSIS - CLASSIFIED]\n\nFrequency: [REDACTED]\nDuration: 47 seconds\nOrigin: Unable to determine\n\nTransmission appears to be encoded in an unknown format. Linguistic analysis suggests it is not based on any known human language. However, spectral analysis reveals patterns that match theoretical models of quantum entanglement communication.\n\nMost concerning finding: The transmission appears to contain information about current events being broadcast from a point in time that predates our earliest historical records.\n\nRecommendation: Attempt decryption protocols Delta through Omega. Alert Dr. Chen immediately."
    },
    {
        number: "FILE-2024-006",
        name: "The Tyler Patrick Timeline",
        subject: "Discrepancies in Historical Records",
        author: "Archivist Michael Torres",
        contents: "Upon detailed examination of Tyler Patrick's historical records, we have discovered significant inconsistencies.\n\nOfficial records show Tyler Patrick employed at [LOCATION] for 7 years. However, cross-referencing with archived employee databases reveals Tyler Patrick was recorded as working there for 12 years, with the last 5 years being somehow 'lost' from most public records.\n\nEducational records show similar gaps. His college transcripts exist, but the college itself shows no record of attendance for one semester.\n\nMost alarming: His birth certificate shows a modification date 3 months ago, though the document appears decades old. The modification is impossible given our paper analysis.\n\nConclusion: Someone, or something, is rewriting history. And Tyler Patrick is at the center of it."
    },
    {
        number: "FILE-2024-007",
        name: "Energy Signature Analysis",
        subject: "Power Source Classification",
        author: "Dr. Elena Kowalski",
        contents: "The energy signatures detected since the Initial Event are unlike anything in our database. Standard classification systems are insufficient.\n\nComparative Analysis:\n- Solar radiation: No correlation\n- Geothermal activity: No correlation\n- Nuclear signatures: No correlation\n- Unknown energy type: 100% match across all incidents\n\nThe energy appears to have quantum properties, maintaining coherence across macroscopic distances. Current theoretical models suggest this energy comes from outside our conventional spacetime.\n\nTracking data indicates the energy flows toward Tyler Patrick's current location. The concentration increases with proximity.\n\nHypothesis: Tyler Patrick is not just a subject of study. He may be a focal point or conduit for this phenomenon."
    },
    {
        number: "FILE-2024-008",
        name: "Contingency Protocol Activation",
        subject: "End Stage Preparations",
        author: "Director Robert Hayes",
        contents: "Effective immediately, all Phase Three protocols are to be enacted.\n\nTyler Patrick is no longer to be considered a subject of investigation. He is to be considered the PRIMARY VARIABLE in the causality breakdown event.\n\nAll surveillance is to be intensified. All communication channels are to be monitored. Any signs of temporal anomalies near Subject's location are to be reported directly to this office.\n\nThe public is to be kept in the dark until evacuation zones can be established. Media contacts have been arranged.\n\nThis situation has escalated beyond control. We are now in damage mitigation mode.\n\nOur best estimate: We have less than 72 hours before the phenomenon reaches critical mass.\n\nGod help us all."
    },
    {
        number: "FILE-2024-009",
        name: "Reassigning files",
        subject: "Assigning certain files to different investigation category",
        author: "System",
        contents: "All files regarding Tyler Patrick have been sent to a separate investigation due to the large amount of information on him needed."
    },
    {
        number: "FILE-2024-010",
        name: "President Internal Memo",
        subject: "President's Internal Memo for Investigation Team and Political Allies.",
        author: "President Evan",
        contents: "Let me be clear, we will stop this thing. I know that we have reached critical mass. There is a pyramid at the top of a mountain. Fog is thickening. People are missing, but we will get through this. we will [CORRUPTED FILE REMAINS]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-[CORRUPTED]-[CORRUPTED]",
        name: "[CORRUPTED]",
        subject: "[CORRUPTED]",
        author: "[CORRUPTED]",
        contents: "[CORRUPTED]"
    },
    {
        number: "FILE-TRANSMISSION-LISTEN",
        name: "A word of warning",
        subject: "My Last Statement",
        author: "Tyler Patrick",
        contents: "Hello, this is Tyler Patrick. \n\n I am writing this on my own personal station. The fog told me the password for the President's account. Here's the problem, how does the fog know this? How do the entities know this? \n\n I've reached a discovery. We have been used. The president was a puppet. We have failed. The labs were struck, why? Because the fog knew. They knew. And now, I know. I drank the water, you know it changed me. I am aware enough to know I am one of them. \n\n They all know everything because they are everything. Everywhere. All at once. That's it. We've lost.\n\n We need a savior."
    },
];

function renderFiles() {
    const container = document.getElementById('filesContainer');
    
    if (!container) {
        console.error('Files container not found');
        return;
    }

    container.innerHTML = '';

    apocalypseFiles.forEach((file, index) => {
        const fileElement = createFileElement(file, index);
        container.appendChild(fileElement);
    });
}

/**
 * Creates a file dropdown DOM element
 * @param {Object} file - File object with number, name, subject, author, contents
 * @param {number} index - Index of the file
 * @returns {HTMLElement} - The created file element
 */
function createFileElement(file, index) {
    const fileDiv = document.createElement('div');
    fileDiv.className = 'file-item';
    fileDiv.id = `file-${index}`;

    const fileHeader = document.createElement('div');
    fileHeader.className = 'file-header';
    fileHeader.onclick = () => toggleFileContent(index);

    const fileTitleDiv = document.createElement('div');
    fileTitleDiv.className = 'file-title';
    
    const fileNumber = document.createElement('span');
    fileNumber.className = 'file-number';
    fileNumber.textContent = file.number;
    
    const fileName = document.createElement('span');
    fileName.className = 'file-name';
    fileName.textContent = file.name;
    
    fileTitleDiv.appendChild(fileNumber);
    fileTitleDiv.appendChild(fileName);

    const toggleIndicator = document.createElement('span');
    toggleIndicator.className = 'toggle-indicator';
    toggleIndicator.textContent = '▼';

    fileHeader.appendChild(fileTitleDiv);
    fileHeader.appendChild(toggleIndicator);

    const fileContent = document.createElement('div');
    fileContent.className = 'file-content';
    fileContent.id = `file-content-${index}`;
    fileContent.style.display = 'none';

    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'file-subject';
    subjectDiv.innerHTML = `<strong>Subject:</strong> ${file.subject}`;

    const authorDiv = document.createElement('div');
    authorDiv.className = 'file-author';
    authorDiv.innerHTML = `<strong>Author:</strong> ${file.author}`;

    const contentsDiv = document.createElement('div');
    contentsDiv.className = 'file-contents';
    contentsDiv.textContent = file.contents;

    fileContent.appendChild(subjectDiv);
    fileContent.appendChild(authorDiv);
    fileContent.appendChild(contentsDiv);

    fileDiv.appendChild(fileHeader);
    fileDiv.appendChild(fileContent);

    return fileDiv;
}

// Below is credit of the great work from a friend who wants to stay publicly anonymous.

/**
 * Toggles file content visibility
 * @param {number} index - Index of the file to toggle
 */
function toggleFileContent(index) {
    const contentElement = document.getElementById(`file-content-${index}`);
    const fileItem = document.getElementById(`file-${index}`);
    
    if (contentElement) {
        const isHidden = contentElement.style.display === 'none';
        contentElement.style.display = isHidden ? 'block' : 'none';
        fileItem.classList.toggle('expanded');
    }
}

/**
 * Toggles all files at once
 * @param {boolean} expandAll - True to expand all, false to collapse all
 */
function toggleAllFiles(expandAll) {
    apocalypseFiles.forEach((_, index) => {
        const contentElement = document.getElementById(`file-content-${index}`);
        const fileItem = document.getElementById(`file-${index}`);
        
        if (contentElement) {
            contentElement.style.display = expandAll ? 'block' : 'none';
            if (expandAll) {
                fileItem.classList.add('expanded');
            } else {
                fileItem.classList.remove('expanded');
            }
        }
    });
}

/**
 * Gets a specific file by number
 * @param {string} fileNumber - The file number to retrieve
 * @returns {Object} - The file object or null if not found
 */
function getFileByNumber(fileNumber) {
    return apocalypseFiles.find(file => file.number === fileNumber);
}

/**
 * Gets files by author
 * @param {string} author - The author name to filter by
 * @returns {Array} - Array of files by that author
 */
function getFilesByAuthor(author) {
    return apocalypseFiles.filter(file => file.author === author);
}

/**
 * Searches files by keyword in name or contents
 * @param {string} keyword - The keyword to search for
 * @returns {Array} - Array of matching files
 */
function searchFiles(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return apocalypseFiles.filter(file =>
        file.name.toLowerCase().includes(lowerKeyword) ||
        file.subject.toLowerCase().includes(lowerKeyword) ||
        file.contents.toLowerCase().includes(lowerKeyword)
    );
}
