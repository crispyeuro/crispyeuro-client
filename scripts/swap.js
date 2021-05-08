function swapMenuBtnClicked(id) {
    if (id == "myRequests") {
        var myRequests = document.getElementById("swapMyRequests");
        if (myRequests.className == "swapMyRequests closed") {
            myRequests.className = "swapMyRequests opened";
            document.getElementById(id).style.color = "rgba(52, 123, 152, 1)";

            document.getElementById("swapOthersRequests").className = "swapOthersRequests closed";
            document.getElementById("othersRequests").style.color = "rgb(46, 56, 77, 1)";

            document.getElementById("swapManageOffers").className = "swapManageOffers closed";
            document.getElementById("manageSwap").style.color = "rgb(46, 56, 77, 1)";
        }
        return true;
    }
    if (id == "othersRequests") {
        var othersRequests = document.getElementById("swapOthersRequests");
        if (othersRequests.className == "swapOthersRequests closed") {
            othersRequests.className = "swapOthersRequests opened";
            document.getElementById(id).style.color = "rgba(52, 123, 152, 1)";

            document.getElementById("swapMyRequests").className = "swapMyRequests closed";
            document.getElementById("myRequests").style.color = "rgb(46, 56, 77, 1)";

            document.getElementById("swapManageOffers").className = "swapManageOffers closed";
            document.getElementById("manageSwap").style.color = "rgb(46, 56, 77, 1)";
        }
        return true;
    }
    if (id == "manageSwap") {
        var manageSwap = document.getElementById("swapManageOffers");
        if (manageSwap.className == "swapManageOffers closed") {
            manageSwap.className = "swapManageOffers opened";
            document.getElementById(id).style.color = "rgba(52, 123, 152, 1)";

            document.getElementById("swapMyRequests").className = "swapMyRequests closed";
            document.getElementById("myRequests").style.color = "rgb(46, 56, 77, 1)";

            document.getElementById("swapOthersRequests").className = "swapOthersRequests closed";
            document.getElementById("othersRequests").style.color = "rgb(46, 56, 77, 1)";
            getUserCoinsToSwap();
        }
        return true;
    }
}

function swapOthersRequestShow(id) {
    var requestContainer = document.getElementById(id);
    if (requestContainer.className == "swapUserRequestContainer opened") {
        requestContainer.className = "swapUserRequestContainer closed";
        return true;
    }
    if (requestContainer.className == "swapUserRequestContainer closed") {
        requestContainer.className = "swapUserRequestContainer opened";
        return true;
    }
}

function swapMyRequestShow(id) {
    var offerContainer = document.getElementById(id);
    if (offerContainer.className == "swapMyRequestContainer opened") {
        offerContainer.className = "swapMyRequestContainer closed";
        return true;
    }
    if (offerContainer.className == "swapMyRequestContainer closed") {
        offerContainer.className = "swapMyRequestContainer opened";
        return true;
    }
}

function loadSwapCoinSettings() {
    document.getElementById("swapManageOffers").innerHTML =
        `
    <br>
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsOrder">Order</div>
        <div class="coinSwapSettingsId">ID</div>
        <div class="coinSwapSettingsType">Type</div>
        <div class="coinSwapSettingsName">Name</div>
        <div class="coinSwapSettingsAvailability">Swap availability</div>
    </div>
    `;
    for (i = 0; i <= coinsToSwap.length - 1; i++) {
        document.getElementById("swapManageOffers").insertAdjacentHTML("beforeend",
            `
        <div class="coinSwapSettings" id="swapSettingsCoin` + i + `">
            <div class="coinSwapSettingsOrder">` + coinsToSwap[i].order + `</div>
            <div class="coinSwapSettingsId">` + coinsToSwap[i].id + `</div>
            <div class="coinSwapSettingsType">` + coinsToSwap[i].type + `</div>
            <div class="coinSwapSettingsName">` + coinsToSwap[i].coin + `</div>
            <div class="coinSwapSettingsAvailability">
                <div class="swapManageCloseBtnContainer" onclick="swapSettingsCoinRemove(` + i + `)">
                    <div class="swapManageCloseBtn"></div>
                </div>
            </div>
        </div>
        `);
    }
}

function swapSettingsCoinRemove(coinNumberId) {
    document.getElementById("swapSettingsCoin" + coinNumberId).style.display = "none";
    return true;
}

function swapReplyBtnClick(order) {
    document.getElementById("swapReplyRequestContainer" + order).style.display = "flex";
    document.getElementById("swapReplyInputValue" + order).focus();
    document.getElementById("swapReplyRequestBtn" + order).style.display = "none";
    document.getElementById("swapSendMessageBtn" + order).style.display = "inline-block";
}

function swapSendReplyBtnClick(order) {
    document.getElementById("swapRepliesName" + order).style.display = "block";
    document.getElementById("swapReplies" + order).style.display = "block";
    var replyValue = document.getElementById("swapReplyInputValue" + order).value;
    document.getElementById("swapReplies" + order).insertAdjacentHTML("beforeend",
        `<div class="swapWrittenReplyContainer">
    <div class="swapWrittenReplyName">A message from me</div>
    <div class="swapWrittenReply">` + replyValue + `</div>
    </div>`
    );
    document.getElementById("swapReplyInputValue" + order).value = "";
}

function swapRequestChangesBtnClick(requestId, action) {
    if (action == "open") {
        document.getElementById("swapRequestChangesShow" + requestId).className = "swapRequestChangesName closed";
        document.getElementById("swapRequestChangesClose" + requestId).className = "swapRequestChangesName opened";
        document.getElementById("swapRequestChanges" + requestId).className = "swapRequestChanges opened";

    }
    if (action == "close") {
        document.getElementById("swapRequestChangesShow" + requestId).className = "swapRequestChangesName opened";
        document.getElementById("swapRequestChangesClose" + requestId).className = "swapRequestChangesName closed";
        document.getElementById("swapRequestChanges" + requestId).className = "swapRequestChanges closed";
    }
}

async function getUserCoinsToSwap() {
    const apiPath = `/api/userCoinsToSwapRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadUserCoinsToSwap(obj);
        } else {
            document.querySelector('.swapManageOffers').innerHTML = '<br><br>There are no your coins to swap!';
        }
    } catch (error) {
        console.log(error);
    }
}

function loadUserCoinsToSwap(result) {
    document.getElementById("swapManageOffers").innerHTML =
        `
    <br>
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsOrder">Order</div>
        <div class="coinSwapSettingsId">Record ID</div>
        <div class="coinSwapSettingsType">Type</div>
        <div class="coinSwapSettingsName">Coin</div>
        <div class="coinSwapSettingsAvailability">Swap availability</div>
    </div>
    `;
    for (i = 0; i < result.length; i++) {
        let coinType = result[i].coin_type.charAt(0).toUpperCase() + result[i].coin_type.slice(1);
        let row =
            `
        <div class="coinSwapSettings" id="swapSettingsCoin` + result[i].coin_id_added + `">
            <div class="coinSwapSettingsOrder">` + (i + 1) + `</div>
            <div class="coinSwapSettingsId">` + result[i].coin_id_added + `</div>
            <div class="coinSwapSettingsType">` + coinType.replace('_', ' ') + `</div>
            <div class="coinSwapSettingsName">` + denominationString(result[i].denomination) + ' ' +
            result[i].issue_year + ' ' + result[i].country.replace('-', ' ') + `</div>
            <form class="coinSwapSettingsAvailability coinSwapSettingsAvailability` + result[i].coin_id_added + `" name="coinSwapSettings" action="/deleteUserCoinToSwap" method="post">
                <input class="addedCoinToSwapId" name="addedCoinToSwapId" type="number" value="` + result[i].coin_id_added + `">
                <div class="swapManageCloseBtnContainer">
                    <input type="button" onclick="sendForm('.coinSwapSettingsAvailability` + result[i].coin_id_added + `'); getUserCoinsToSwap();">
                    <div class="swapManageCloseBtn"></div>
                </div>
            </from>
        </div>
        `;
        document.getElementById("swapManageOffers").innerHTML += row;
    }
}

function denominationString(denomination) {
    let denominationStr = denomination;
    if (denominationStr.includes(".")) {
        const separated = (denominationStr).split(".");
        if (separated.length == 2) {
            if (separated[0] == "0") {
                if (separated[1].charAt(0) == "0") {
                    denominationStr = separated[1].substring(1) + " cent";
                } else {
                    denominationStr = separated[1] + "0  cent";
                }
            } else {
                denominationStr = denominationStr + " euro";
            }
        } else {
            console.log("Denomination value mistake");
        }
    } else {
        denominationStr += " euro";
    }
    return denominationStr;
}

async function sendForm(formSelectorQuery) {
    const form = document.querySelector(formSelectorQuery);
    const body = new URLSearchParams(new FormData(form)).toString();
    const response = await fetch(form.action, {
        method: 'post',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
    return true;
}

async function getSentSwapRequests() {
    const apiPath = `/api/getSentSwapRequests${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        console.log(obj);
        if (obj.length > 0) {
            document.querySelector('.swapMyRequests').innerHTML = '';
            loadSentSwapRequests(obj);
        } else {
            document.querySelector('.swapMyRequests').innerHTML = `<div class="noRequestsContainer">You have no any sent requests.</div>`;
        }
    } catch (error) {
        console.log(error);
    }
}

async function loadSentSwapRequests(result) {
    for (i = 0; i < result.length; i++) {
        console.log(i + " swap request id " + result[i].swap_request_id);
        let date = getDateToLocalDate(new Date(result[i].created_date));

        let request =
            `
        <div class="swapMyRequest">
            <div class="swapMyRequestName" onclick="swapMyRequestShow('myRequsetContainer` + 
            result[i].swap_request_id + `')">Your coin swap request to <div class="textBold">` + 
            result[i].receiver_username + `</div> <div class="textGrey">on ` + date + `</div></div>
            <div class="swapMyRequestContainer closed" id="myRequsetContainer` + result[i].swap_request_id + `">
                You want to swap your coin
                <div class="swapUserRequestCoinContainer">`;

        for (m = 0; m < (result[i].sender_coins).length; m++) {
            request += await loadSenderCoin((result[i].sender_coins)[m]);
        }
        
        request +=
            `<div class="forContainer">
                        for
                    </div>`;

        for (l = 0; l < (result[i].receiver_coins).length; l++) {
            request += await loadReceiverCoin((result[i].receiver_coins)[l]);
        }

        request += `</div>`;
        if (result[i].comment == null || result[i].comment == undefined || result[i].comment == "") {
            request += 
                `Offer details
                <div class="swapOfferDetails">
                    <div class="swapEmptyOfferComment">No details provided</div>
                </div>`;
        } else {
            request += 
                `Offer details
                <div class="swapOfferDetails">` + result[i].comment + `</div>`;
        }

        getSwapMessages(result[i].swap_request_id);

        request += 
                `<span class="swapRepliesName" id="swapRepliesName` + result[i].swap_request_id + `">Conversion</span>
                <div class="swapReplies" id="swapReplies` + result[i].swap_request_id + `"></div>
                <form class="swapReplyRequestContainer swapMessageForm` + result[i].swap_request_id + `" 
                    id="swapReplyRequestContainer` + result[i].swap_request_id + `" action="/swapSendMessage" method="post">
                    New message
                    <input class="swapRequestIdHidden" type="number" name="swapRequestId" value="` + result[i].swap_request_id + `">
                    <input class="swapMessageReceiverHidden" type="text" name="receiverUsername" value="` + result[i].receiver_username + `">
                    <textarea class="swapReplyInput" id="swapReplyInputValue` + result[i].swap_request_id + `" name="message" 
                        placeholder="Your message..."></textarea>
                </form>
                <div class="swapUserRequestButtons">
                    <input type="button" class="swapSendMessageBtn" id="swapSendMessageBtn` + result[i].swap_request_id + `"
                        onclick="sendForm('.swapMessageForm` + result[i].swap_request_id +`'); getSwapMessages(` + result[i].swap_request_id + `);" value="Send message">
                    <button class="swapReplyRequestBtn" id="swapReplyRequestBtn` + result[i].swap_request_id + `"
                        onclick="swapReplyBtnClick(` + result[i].swap_request_id + `)">Reply</button>
                    <button class="swapChangeOffer" id="swapChangeOffer" onclick="getUserCoinsToSwapChangeOffer('` + result[i].swap_request_id + `'); showSwapChangeOfferModal()">Change
                        offer</button>
                    <button onclick="loadswapModalCancel('` + result[i].swap_request_id + `');showSwapCloseConfirmation('swapModalCancel')">Cancel offer</button>
                    <button>Swapped</button>
                </div>
                <div class="swapRequestChangesName opened" id="swapRequestChangesShow` + result[i].swap_request_id + `"
                    onclick="getSwapRequestChanges('` + result[i].swap_request_id + `');swapRequestChangesBtnClick('` + result[i].swap_request_id + `', 'open')">See offer previous request changes</div>
                <div class="swapRequestChangesName closed" id="swapRequestChangesClose` + result[i].swap_request_id + `"
                    onclick="swapRequestChangesBtnClick('` + result[i].swap_request_id + `', 'close')">Close offer previous request changes</div>
                <div class="swapRequestChanges closed" id="swapRequestChanges` + result[i].swap_request_id + `">No request changes</div>
            </div>
        </div>
        `
        document.querySelector('.swapMyRequests').innerHTML += request;
    }
}

async function getAddedCoin(coinId) {
    const apiPath = `/api/getSwapAddedCoin?added_coin_id=` + coinId;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        console.log(obj);
        return obj;
    } catch (error) {
        console.log(error);
    }
}

async function loadSenderCoin(coinId) {
    let coin = await getAddedCoin(coinId);
    if (coin.length > 0) {
        let nominal = await coinNominalText(coin[0].denomination);
        let coinType = ((coin[0].coin_type).charAt(0).toUpperCase() + (coin[0].coin_type).slice(1)).replace('_', ' ');

        let addedCoin = "";
        addedCoin =
            `
        <div class="myCoinContainer">
            <div class="myCoinContainerName">` + coinType + `<br><div class="textBold"> ` + nominal + ` ` + coin[0].country + ` ` + coin[0].issue_year + `</div></div>
            <div class="myCointContent">`;
        if (coin[0].obverse_image_path != null) {
            addedCoin += `<div class="coinPicContainer"><img src="` + coin[0].obverse_image_path + `"></div>`
        } else {
            addedCoin += `<div class="coinPic">PIC</div>`;
        }
        addedCoin +=
            `
                <div class="coinDescription">
                    <span>ID <div class="textBold">` + coin[0].added_coin_id + `</div> in my collection</span><br><br>
                    <span>Grade: ` + coin[0].grade + `</span><br><br>
                    <div class="swapCoinDetailsBtn" onclick="openCoinDetailsModal(` + coinId + `)">View details</div>
                </div>
            </div>
        </div>
        `;
        return addedCoin;
    } else {
        return "Something else";
    }
}

async function loadReceiverCoin(coinId) {
    let coin = await getAddedCoin(coinId);
    if (coin.length > 0) {
        let nominal = await coinNominalText(coin[0].denomination);
        let coinType = ((coin[0].coin_type).charAt(0).toUpperCase() + (coin[0].coin_type).slice(1)).replace('_', ' ');

        let addedCoin = "";
        addedCoin =
            `
        <div class="myCoinContainer">
            <div class="myCoinContainerName">` + coinType + `<br><div class="textBold"> ` + nominal + ` ` + coin[0].country + ` ` + coin[0].issue_year + `</div></div>
            <div class="myCointContent">`;
        if (coin[0].obverse_image_path != null) {
            addedCoin += `<div class="coinPicContainer"><img src="` + coin[0].obverse_image_path + `"></div>`
        } else {
            addedCoin += `<div class="coinPic">PIC</div>`;
        }
        addedCoin +=
            `
                <div class="coinDescription">
                    <br>
                    <span>Grade: ` + coin[0].grade + `</span><br><br>
                    <div class="swapCoinDetailsBtn" onclick="openCoinDetailsModal(` + coinId + `)">View details</div>
                </div>
            </div>
        </div>
        `;
        return addedCoin;
    } else {
        return "Something else";
    }
}

async function getReceivedSwapRequests() {
    const apiPath = `/api/getReceivedSwapRequests${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        console.log(obj);
        if (obj.length > 0) {
            document.querySelector('.swapOthersRequests').innerHTML = '';
            loadReceivedSwapRequests(obj);
        } else {
            document.querySelector('.swapOthersRequests').innerHTML = `<div class="noRequestsContainer">You have no any received requests.</div>`;
        }
    } catch (error) {
        console.log(error);
    }
}

async function loadReceivedSwapRequests(result) {
    for (i = 0; i < result.length; i++) {
        let date = getDateToLocalDate(new Date(result[i].created_date));

        offer = 
        `
        <div class="swapUserRequest">
                <div class="swapUserRequestName" onclick="swapOthersRequestShow('firstRequset` + result[i].swap_request_id + `')">Swap request from 
                <div class="textBold">` + result[i].sender_username + `</div> <div class="textGrey">on ` + date + `</div></div> 
                <div class="swapUserRequestContainer closed" id="firstRequset` + result[i].swap_request_id + `">
                    Wants to swap your coin
                    <div class="swapUserRequestCoinContainer">`;
        
        for (m = 0; m < (result[i].receiver_coins).length; m++) {
            offer += await loadSenderCoin((result[i].receiver_coins)[m]);
        }
                        
        offer +=
                        `<div class="forContainer">
                            for
                        </div>`;

        for (l = 0; l < (result[i].sender_coins).length; l++) {
            offer += await loadReceiverCoin((result[i].sender_coins)[l]);
        }

        console.log(result[i].comment);
        offer += `</div>`;
        if (result[i].comment == null || result[i].comment == undefined || result[i].comment == "") {
            offer += 
                `Offer details
                <div class="swapOfferDetails">
                    <div class="swapEmptyOfferComment">No details provided</div>
                </div>`;
        } else {
            offer += 
                `Offer details
                <div class="swapOfferDetails">` + result[i].comment + `</div>`;
        }

        getSwapMessages(result[i].swap_request_id);

        offer +=
                    `<span class="swapRepliesName" id="swapRepliesName` + result[i].swap_request_id + `">Conversion</span>
                    <div class="swapReplies" id="swapReplies` + result[i].swap_request_id + `"></div>
                    <form class="swapReplyRequestContainer swapMessageForm` + result[i].swap_request_id + `" 
                        id="swapReplyRequestContainer` + result[i].swap_request_id + `" action="/swapSendMessage" method="post">
                        New message
                        <input class="swapRequestIdHidden" type="number" name="swapRequestId" value="` + result[i].swap_request_id + `">
                        <input class="swapMessageReceiverHidden" type="text" name="receiverUsername" value="` + result[i].sender_username + `">
                        <textarea class="swapReplyInput" id="swapReplyInputValue` + result[i].swap_request_id + `" name="message" 
                            placeholder="Your message..."></textarea>
                    </form>
                    <div class="swapUserRequestButtons" id="swapUserRequestButtons` + result[i].swap_request_id + `">
                        <input type="button" class="swapSendMessageBtn" id="swapSendMessageBtn` + result[i].swap_request_id + `"
                        onclick="sendForm('.swapMessageForm` + result[i].swap_request_id +`'); getSwapMessages(` + result[i].swap_request_id + `);" value="Send message">
                        <button class="swapReplyRequestBtn" id="swapReplyRequestBtn` + result[i].swap_request_id + `"
                            onclick="swapReplyBtnClick(` + result[i].swap_request_id + `)">Reply</button>
                        <button onclick="loadswapModalDismiss('` + result[i].swap_request_id + `');showSwapCloseConfirmation('swapModalDismiss')">Dismiss</button>
                        <button>Swapped</button>
                    </div>
                    <div class="swapRequestChangesName opened" id="swapRequestChangesShow` + result[i].swap_request_id + `"
                        onclick="getSwapRequestChanges('` + result[i].swap_request_id + `');swapRequestChangesBtnClick('` + result[i].swap_request_id + `', 'open')">See offer previous request changes</div>
                    <div class="swapRequestChangesName closed" id="swapRequestChangesClose` + result[i].swap_request_id + `"
                        onclick="swapRequestChangesBtnClick(` + result[i].swap_request_id + `, 'close')">Close offer previous request changes</div>
                    <div class="swapRequestChanges closed" id="swapRequestChanges` + result[i].swap_request_id + `">No request changes</div>
                </div>
            </div>
        `;
        document.querySelector('.swapOthersRequests').innerHTML += offer;
    }
}


async function coinNominalText(nominal) {
    let nominalText = "";
    if (nominal.includes(".")) {
        const separated = nominal.split(".");
        if (separated.length == 2) {
            if (separated[0] == "0") {
                if (separated[1].charAt(0) == "0") {
                    nominalText = separated[1].substring(1) + " cent";
                } else {
                    nominalText = separated[1] + "0 cent";
                }
            } else {
                nominalText = nominal + " euro";
            }
        } else {
            console.log("Denomination value mistake")
        }
    } else {
        nominalText += nominal + " euro";
    }
    return nominalText;
}

function getDateToLocalDate(dateISO) {
    /*Time zone offset in milliseconds*/
    let timeZoneOffet = dateISO.getTimezoneOffset() * 60000;

    let localDate = new Date(dateISO - timeZoneOffet).toISOString();
    localDate = localDate.replaceAll('-', '/');
    localDate = localDate.replace('T', ' ');

    return localDate.split('.')[0];
}

async function getUserCoinsToSwapChangeOffer(swapRequestId) {
    const apiPath = `/api/userCoinsToSwapRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadSwapCoinsListChangeOffer(obj, swapRequestId);
        } else {
            document.getElementById("modalMyCoinsToOfferChangeList").innerHTML = '<br><br>Your list of coins available for swap is empty!';
        }
    } catch (error) {
        console.log(error);
    }
}

function loadSwapCoinsListChangeOffer(result, swapRequestId) {
    document.querySelector('.swapChangeOfferModalContent').innerHTML = 
    `
    <form class="swapChangeOfferModal swapChangeOfferModal` + swapRequestId + `" action="/sendChangeRequestForm" method="post">
        <div class="closeBtnContainer" onclick="hideSwapChangeOfferModal(); return false;">
            <div class="closeBtn"></div>
        </div>
        <div class="coinNameRow">Change your coin swap offer</div><br>
        <input name="swapRequestId" type="number" class="swapRequestIdHidden" value="` + swapRequestId + `">
        <div id="modalMyCoinsToOfferChangeList"></div>
        <br>
        <div class="modalWantThisCoinBtnContainer">
            <input type="button" onclick="sendForm('.swapChangeOfferModal` + swapRequestId + `');hideSwapChangeOfferModal();getSentSwapRequests();" value="Save offer">
            <button onclick="hideSwapChangeOfferModal(); return false;">Cancel</button>
        </div>
    </form>
    `;

    document.getElementById("modalMyCoinsToOfferChangeList").innerHTML =
        `
    <br>
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsOrder">Order</div>
        <div class="coinSwapSettingsId">Record ID</div>
        <div class="coinSwapSettingsType">Type</div>
        <div class="coinSwapSettingsName">Name</div>
        <div class="coinSwapSettingsAvailability">Coin to offer</div>
    </div>
    `;
    for (i = 0; i < result.length; i++) {
        let coinType = result[i].coin_type.charAt(0).toUpperCase() + result[i].coin_type.slice(1);
        let row = 
        `
        <div class="coinSwapSettings" id="swapSettingsCoin` + result[i].coin_id_added + `">
            <div class="coinSwapSettingsOrder">` + (i + 1) + `</div>
            <div class="coinSwapSettingsId">` + result[i].coin_id_added + `</div>
            <div class="coinSwapSettingsType">` + coinType.replace('_', ' ') + `</div>
            <div class="coinSwapSettingsName">` + denominationString(result[i].denomination) + ' ' +
            result[i].issue_year + ' ' + result[i].country.replace('-', ' ') + `</div>
            <div class="coinSwapSettingsAvailability">
                <label for="modalMyCoinForSwap`+ result[i].coin_id_added + `" class="checkboxContainer" id="modalMyCoinForSwap">
                    <input type="checkbox" class="modalChooseMyCoin"` +  
                    `" name="coinsToSwap" id="modalMyCoinForSwap`+ result[i].coin_id_added + `" value="` + result[i].coin_id_added + `">
                    <div class="fCheckbox"></div>
                </label>
            </div>
        </div>
        `;
        document.getElementById('modalMyCoinsToOfferChangeList').innerHTML += row;
    }
}

async function getSwapRequestChanges(swapRequestId) {
    const apiPath = `/api/getSwapRequestChanges?swap_request_id=` + swapRequestId;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        console.log(obj);
        if (obj.length > 0) {
            loadSwapRequestChanges(swapRequestId, obj);
        }
    } catch (error) {
        console.log(error);
    }
}

async function loadSwapRequestChanges(swapRequestId, result) {
    document.getElementById('swapRequestChanges' + swapRequestId).innerHTML = ``;
    for(i = 0; i < result.length; i++) {
        let date = getDateToLocalDate(new Date(result[i].changed_date));
        let row = 
        `Offered coins changed on <div class="textDarksestBlue">` + date + `</div> to <br>`;
        if (result[i].sender_new_coins != undefined && (result[i].sender_new_coins).length > 0) {
            for (m = 0; m < (result[i].sender_new_coins).length; m++) {
                let coin = await getAddedCoin((result[i].sender_new_coins)[m]);
                let nominal = await coinNominalText(coin[0].denomination);
                if (coin.length > 0) {
                    row += `<div class="swapChangesCoinContainer">` + 
                    (coin[0].coin_type).charAt(0).toUpperCase() + (coin[0].coin_type).slice(1) + 
                    ` <div class="textBold">` + 
                    nominal + 
                    ` ` + 
                    coin[0].country + 
                    ` ` 
                    + 
                    coin[0].issue_year + 
                    `</div></div>`;
                } else {
                    row = `<div class="swapChangesCoinContainer">` + (m + 1) + `. No coin data</div>`;
                }
                
            }
        } else {
            row += 
            `<div class="swapChangesCoinContainer">
                <div class="swapNoOfferedCoins">No offered coins</div>
            </div>`;
        }

        row += `<br>`;
        document.getElementById('swapRequestChanges' + swapRequestId).innerHTML += row;
    }
}

function loadswapModalCancel(swapRequestId) {
    document.querySelector('.swapModalCancelRequestId').value = swapRequestId;
}

function loadswapModalDismiss(swapRequestId) {
    document.querySelector('.swapModalDismissRequestId').value = swapRequestId;
}

async function getSwapMessages(swapRequestId) {
    const apiPath = `/api/getSwapMessages?swap_request_id=` + swapRequestId;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        loadSwapMessages(swapRequestId, obj);
    } catch (error) {
        console.log(error);
    }
}

async function loadSwapMessages(swapRequestId, result) {
    if (result.length > 0) {
        document.getElementById("swapRepliesName" + swapRequestId).style.display = "block";
        document.getElementById("swapReplies" + swapRequestId).style.display = "block";
        document.getElementById("swapReplies" + swapRequestId).innerHTML = "";
        document.getElementById("swapReplyInputValue" + swapRequestId).value = "";

        for(k = 0; k < result.length; k++) {
            let date = getDateToLocalDate(new Date(result[k].created_date));
            let row = 
            `
            <div class="swapWrittenReplyContainer">
                <div class="swapWrittenReplyName">
                    <div class="textBold">` + result[k].sender_username + `</div> on 
                    <div class="textDarksestBlue">` + date + `</div>
                </div>
                <div class="swapWrittenReply">` + result[k].message + `</div>
            </div>
            `;
            document.getElementById("swapReplies" + swapRequestId).innerHTML += row;
            
        }
    }
}
