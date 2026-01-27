const messages = [
    {
        from: "SYSTEM",
        message: "Prior conversation deleted at admin's request."
    },
    {
        from: "Conner",
        message: "We can now accurately report that the only deaths from the event were from the formation of the volcano, which was 12,373."
    },
    {
        from: "Evan",
        message: "Then where the hell are the other 9.5 million people?"
    },
    {
        from: "Conner",
        message: "How the **** am I supposed to know? It took us 20 days to figure out that they didn't all die."
    },
    {
        from: "Josh",
        message: "If I may interject gentlemen, our priority is to stop this and be the saviors, not try to save 9.5 million lost cadavers. Sorry Conner, they're definitely dead."
    },
    {
        from: "Evan",
        message: "I'm going to draw everyone's attention to a batch of files. We know of this mythology professor, Tyler Patrick."
    },
    {
        from: "Josh",
        message: "Mr. President, we all do, how is this relevant?"
    },
    {
        from: "System",
        message: "Permissions for the Tyler Patrick files granted to two parties."
    },
    {
        from: "Evan",
        message: "I urge you two to check it out, give it a read. He has some interesting stuff."
    },
    {
        from: "Evan",
        message: "Did you guys go through it?"
    },
    {
        from: "Conner",
        message: "We need to get this guy on board, he's researching the fog, he's studied this exact event, how did you find him?"
    },
    {
        from: "Evan",
        message: "We have observed him moving throughout his hometown."
    },
    {
        from: "Conner",
        message: "I'm going to get the IT specialist to create us a portal to better communicate and share files."
    },
    {
        from: "Josh",
        message: "That's a smart idea."
    },
    {
        from: "SYSTEM",
        message: "Conner added Mack to the chat."
    },
    {
        from: "Mack",
        message: "Done, portal created. President Evan, your login is Evan, Ending123, and 0522. (Sent privately to you)"
    },
    {
        from: "Josh",
        message: "Guys."
    },
    {
        from: "Josh",
        message: "I have a theory."
    },
    {
        from: "Josh",
        message: "Now that we can confirm the death of Tyler Patrick, what if he encountered something more closely when he drank that water, as seen in his journal?."
    },
    {
        from: "Evan",
        message: "We didn't observe him meeting any entities."
    },
    {
        from: "Josh",
        message: "That doesn't mean that weh he drank that water, it wasn't something that grew in him like a parasite. That matter has to go somewhere."
    },
    {
        from: "Conner",
        message: "Wait, Evan, how did we observe him moving around? We don't have any patrols there."
    },
    {
        from: "Conner",
        message: "Evan?"
    },
    {
        from: "SYSTEM",
        message: "Conner, Josh, Mack have been removed from chat by admin."
    },
    {
        from: "SYSTEM",
        message: "Conner, Josh have been removed from security clearance by admin."
    },
    {
        from: "SYSTEM",
        message: "Chat closed at request of admin."
    }
];

// Contains adapted code from What's The Answer X, a project I worked on.

function renderMessages() {
    const container = document.getElementById('messagesContainer');
    
    if (!container) {
        console.error('Messages container not found');
        return;
    }

    container.innerHTML = '';

    messages.forEach(msg => {
        const messageElement = createMessageElement(msg);
        container.appendChild(messageElement);
    });

    scrollToBottom();
}

// July 3rd, 2025, I no longer know what the hell I'm doing. Wish I used comments

/**
 * Creates a message DOM element
 * @param {Object} msg - Message object with 'from' and 'message' properties
 * @returns {HTMLElement} - The created message element
 */
function createMessageElement(msg) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    if (msg.from === 'SYSTEM') {
        messageDiv.classList.add('system-message');
    } else if (msg.from === 'Evan') {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('other-message');
    }

    const senderElement = document.createElement('div');
    senderElement.className = 'message-sender';
    senderElement.textContent = msg.from;

    const textElement = document.createElement('div');
    textElement.className = 'message-text';
    textElement.textContent = msg.message;

    messageDiv.appendChild(senderElement);
    messageDiv.appendChild(textElement);

    return messageDiv;
}

/**
 * Adds a new message to the messages array and re-renders
 * @param {string} from - The sender of the message
 * @param {string} text - The message text
 */
function addMessage(from, text) {
    messages.push({
        from: from,
        message: text
    });
    renderMessages();
}

function scrollToBottom() {
    const container = document.getElementById('messagesContainer');
    if (container) {
        container.scrollTop = container.scrollHeight;
    }
}

function clearMessages() {
    messages.length = 0;
    renderMessages();
}

/**
 * Gets all messages
 * @returns {Array} - Array of all message objects
 */
function getMessages() {
    return messages;
}

/**
 * Gets messages from a specific sender
 * @param {string} sender - The sender name to filter by
 * @returns {Array} - Array of messages from that sender
 */
function getMessagesBySender(sender) {
    return messages.filter(msg => msg.from === sender);
}
