function showConversation(userId) {
    document.getElementsByClassName("messagesContactsContainer")[0].style.display = "none";
    document.getElementsByClassName("conversationContainer")[0].style.display = "block";

    document.getElementById("loadedconversationMessagesList").innerHTML =
        `
    <div class="conversationBtnRow">
        <a href="messages.html">Go back</a>
    </div>`;
    var conversation = `<div class="conversation">`;
    var contactMessages = testMessages[userId - 1].userMessages;
    if (contactMessages.length > 0) {
        for (i = 0; i <= contactMessages.length - 1; i++) {
            conversation += `
            <div class="message">
            <div class="messageFromUserName">[` + testContacts[userId - 1].username + `]`;

            if (testContacts[userId - 1].online == true) {
                conversation += `<div class="userOnlineSign"></div>`;
            }

            conversation += `</div>
            <div class="messageFromUser">
            ` +
                contactMessages[i].message +
                `
                </div>
                </div>
            `;
            if (i != contactMessages.length - 1) {
                conversation += `
                <div class="message">
                <div class="messageFromMeName">[testUsername]</div>
                <div class="messageFromMecontainer">
                    <div class="messageFromMe">My message</div>
                </div>
                `;
            }
        }
    }
    conversation += `
    <div class="sendedMessage"></div>
    <div class="message">
        <div class="messageWriteName">Write your message to ` + testContacts[userId - 1].username + `</div>
        <div class="messageWrite">
            <textarea id="conversationMessageToSend" autofocus></textarea>
    </div>
    <div class="conversationSendBtnRow"><button onclick="sendMessage()">Send message</button></div>
    </div>
    </div>
    `;
    document.getElementById("loadedconversationMessagesList").insertAdjacentHTML("beforeend", conversation);
}

function sendMessage() {
    var messageValue = ""
    messageValue = document.getElementById("conversationMessageToSend").value;
    if (messageValue != "") {
        var messageToSend;
        messageToSend = `
        <div class="message">
        <div class="messageFromMeName">[testUsername]</div>
        <div class="messageFromMecontainer">
            <div class="messageFromMe">` + messageValue +
            `</div>
        </div>
        `
        document.getElementsByClassName("sendedMessage")[0].insertAdjacentHTML("beforeend", messageToSend);
        document.getElementById("conversationMessageToSend").value = "";
    }
}

function showContactsList() {
    document.getElementsByClassName("conversationContainer")[0].style.display = "none";
    document.getElementsByClassName("messagesContactsContainer")[0].style.display = "block";
}

function loadMessagesContactsList() {
    document.getElementById("loadedMessagesContactsList").innerHTML =
        `
    <div class="messagesBtnRow"><button>Add new contact</button></div>
    `;
    var contactContainer;
    var userLastMessage;
    var userId;
    var contactMessages;
    var messagesContactId = -1;
    for (contactId = 0; contactId <= testContacts.length - 1; contactId++) {
        contactContainer = `
        <div class="messagesContact">
            <div class="closeBtnContainer">
                <div class="closeBtn"></div>
            </div>
            <div class="contactUser">[` + testContacts[contactId].username + `]
        `;

        if (testContacts[contactId].online == true) {
            contactContainer += `<div class="userOnlineSign"></div>`;
        }

        contactContainer +=
            `
        </div>
        <div class="contactLastMessage" id="` + `userId` + testContacts[contactId].id +
            `" onclick="showConversation(` + testContacts[contactId].id +
            `)">`;

        userId = testContacts[contactId].id;
        for (i = 0; i <= testMessages.length - 1; i++) {
            if (testMessages[i].id == userId) {
                contactMessages = testMessages[i].userMessages;
                break;
            }
        }
        if (contactMessages.length > 0) {
            userLastMessage = contactMessages[contactMessages.length - 1].message;
            contactContainer += userLastMessage;
        } else {
            contactContainer += "No messages";
            messagesContactId = testContacts[contactId].id;
        }
        contactContainer += `
            </div>
        </div>
        `;

        document.getElementById("loadedMessagesContactsList").insertAdjacentHTML("beforeend", contactContainer);
        if (messagesContactId == testContacts[contactId].id) {
            document.getElementById("userId" + messagesContactId).style.color = "rgba(135, 152, 173, 0.8)";
            document.getElementById("userId" + messagesContactId).style.fontStyle = "italic";
        }
    };
}
