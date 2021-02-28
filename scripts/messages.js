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

            conversation += `
            <div class="messagescloseBtnContainer">
                <div class="messagescloseBtn"></div>
            </div>
            </div>
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
    <div class="messagesBtnRow" onclick="showAddNewContactModal()"><button>Add new contact</button></div>
    `;
    var contactContainer;
    var userLastMessage;
    var userId;
    var contactMessages;
    var messagesContactId = -1;
    /*Display test contacts. Last display contact not displayed for testing purposes*/
    for (contactId = 0; contactId < testContacts.length - 1; contactId++) {
        contactContainer = `
        <div class="messagesContact">
            <div class="messagescloseBtnContainer">
                <div class="messagescloseBtn"></div>
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

function showAddNewContactModal() {
    document.getElementsByClassName("modalContentAddNewContact")[0].style.display = "flex";
}

function hideAddNewContactModal() {
    document.getElementsByClassName("modalContentAddNewContact")[0].style.display = "none";
}

var searchValue;

function checkUrlForContactSearchValue() {
    var url = window.location.search;
    var urlValue = new URLSearchParams(url);
    searchValue = urlValue.get('contactSearch');
    if (searchValue !== null) {
        document.getElementsByClassName("modalSearchContactValue")[0].innerHTML = 'Search results for: "' + searchValue + '"';
        showAddNewContactModal();
        searchContacts(searchValue);
    }
}

function searchContacts(x) {
    document.getElementsByClassName("modalSearchContactResult")[0].innerHTML = "";
    var found = 0;
    for (i = 0; i < testContacts.length; i++) {

        /*If user is already in contacts list. Last test contact is not in the list for testing purposes.*/
        if (testContacts[i].username != "user972" && x == testContacts[i].username) {
            var searchResult = `<div class="modalSearchResultRow"><div class="modalSearchUsername"><span class="modalSearchUsernameText">` + testContacts[i].username + `</span>`;
            if (testContacts[i].online == true) {
                searchResult += `<div class="userOnlineSign"></div>`;
            }
            searchResult += `</div><span>User in contact list</span></div>`;
            document.getElementsByClassName("modalSearchContactResult")[0].insertAdjacentHTML("beforeend", searchResult);
            document.getElementsByClassName("modalSearchContactResult")[0].style.justifyContent = "initial";
            found++;
            continue;
        }

        if (x == testContacts[i].username) {
            var searchResult = `<div class="modalSearchResultRow"><div class="modalSearchUsername"><span class="modalSearchUsernameText">` + testContacts[i].username + `</span>`;
            if (testContacts[i].online == true) {
                searchResult += `<div class="userOnlineSign"></div>`;
            }
            searchResult += `</div><button onclick="hideAddNewContactModal()" class="modalSubmitAddNewContact">Add contact</button></div>`;
            document.getElementsByClassName("modalSearchContactResult")[0].insertAdjacentHTML("beforeend", searchResult);
            document.getElementsByClassName("modalSearchContactResult")[0].style.justifyContent = "initial";
            found++;
        }
    }
    if (found == 0) {
        document.getElementsByClassName("modalSearchContactResult")[0].innerHTML = "Nothing found";
    }
}
