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
