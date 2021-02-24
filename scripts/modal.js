var modalContent = document.getElementsByClassName("modalContent")[0];

function showAddCoinContainer() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "block";
    document.getElementById("modalCoinDataName").style.display = "none";

    document.getElementById("modalAddCoinBtn").style.display = "block";
    document.getElementById("modalSaveCoinBtn").style.display = "none";

    document.getElementById("modalCoinUserSwap").style.display = "none";
    document.getElementById("modalSendUserOffer").style.display = "none";
}

function showAddedCoinData() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "none";
    document.getElementById("modalCoinDataName").style.display = "block";

    document.getElementById("modalAddCoinBtn").style.display = "none";
    document.getElementById("modalSaveCoinBtn").style.display = "block";

    document.getElementById("modalCoinUserSwap").style.display = "none";
    document.getElementById("modalSendUserOffer").style.display = "none";
}

function showCoincardUserOffer() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "none";
    document.getElementById("modalCoinDataName").style.display = "none";

    document.getElementById("modalAddCoinBtn").style.display = "none";
    document.getElementById("modalSaveCoinBtn").style.display = "none";

    document.getElementById("modalCoinUserSwap").style.display = "block";
    document.getElementById("modalSendUserOffer").style.display = "block";
}

function showCoincardMyOffer() {
    document.getElementsByClassName("modalContentMyOffer")[0].style.display = "flex";
    loadSwapCoinsListOffer();
}

function hideModalContentMyOffer() {
    document.getElementsByClassName("modalContentMyOffer")[0].style.display = "none";
}

function hideAddCoinContainer() {
    modalContent.style.display = "none";
}

/*Close modal when clicked outside modal*/
window.onclick = function (event) {
    if (event.target === modalContent) {
        modalContent.style.display = "none";
        return true;
    }
    if (event.target === document.getElementsByClassName("modalContentMyOffer")[0]) {
        document.getElementsByClassName("modalContentMyOffer")[0].style.display = "none";
        return true;
    }
    if (event.target === document.getElementsByClassName("navLinksOnMobile")[0]) {
        showNavLinks();
    }
}

function loadSwapCoinsListOffer() {
    document.getElementById("modalMyCoinsToOfferList").innerHTML =
    `
    <br>
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsOrder">Order</div>
        <div class="coinSwapSettingsId">ID</div>
        <div class="coinSwapSettingsType">Type</div>
        <div class="coinSwapSettingsName">Name</div>
        <div class="coinSwapSettingsAvailability">Coin to offer</div>
    </div>
    `;
    for (i = 0; i <= coinsToSwap.length - 1; i++) {
        document.getElementById("modalMyCoinsToOfferList").insertAdjacentHTML("beforeend",
            `
        <div class="coinSwapSettings" id="swapSettingsCoin` + i + `">
            <div class="coinSwapSettingsOrder">` + coinsToSwap[i].order + `</div>
            <div class="coinSwapSettingsId"><a href="coincard.html" target="_blank" rel="noopener noreferrer">` + coinsToSwap[i].id + `</a></div>
            <div class="coinSwapSettingsType">` + coinsToSwap[i].type + `</div>
            <div class="coinSwapSettingsName">` + coinsToSwap[i].coin + `</div>
            <div class="coinSwapSettingsAvailability">
                <label for="modalChooseMyCoin` + coinsToSwap[i].id + `" class="checkboxContainer" id="modalSwapCheckbox">
                    <input type="checkbox" class="modalChooseMyCoin" id="modalChooseMyCoin` + coinsToSwap[i].id + `" name="modalMyCoinForSwap"
                        value="addedCoinAvailable">
                    <div class="fCheckbox"></div>
                </label>
            </div>
        </div>
        `);
    }
}
