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
