/*Coincard tab modal*/

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

function showAddedCoinDataModal() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "none";
    document.getElementById("modalCoinDataName").style.display = "block";

    document.getElementById("modalAddCoinBtn").style.display = "none";
    document.getElementById("modalSaveCoinBtn").style.display = "block";
    /*document.querySelector('.modalUserMyRequestCoinToChoose').style.display = 'none';*/

    document.getElementById("modalCoinUserSwap").style.display = "none";
    document.getElementById("modalSendUserOffer").style.display = "none";
}

function showCoincardUserOffer() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "none";
    document.getElementById("modalCoinDataName").style.display = "none";

    document.getElementById("modalAddCoinBtn").style.display = "none";
    document.getElementById("modalSaveCoinBtn").style.display = "none";
    document.querySelector('.modalUserMyRequestCoinToChoose').style.display = 'none';

    document.getElementById("modalCoinUserSwap").style.display = "block";
    /*document.getElementById("modalSendUserOffer").style.display = "block";*/
}

function showCoincardMyRequest() {
    document.querySelector('.modalContentMyRequest').style.display = 'flex';
    document.querySelector('.offeredCoinRequestContainer').style.display = 'block';
    document.querySelector('.coinRequestContainer').style.display = 'none';
    document.querySelector('.modalRequestThisCoinSwapBtnNext').style.display = 'block';
}

function showCoincardMyOffer() {
    document.getElementsByClassName("modalContentMyOffer")[0].style.display = "flex";
    document.getElementsByClassName("modalUserMyOfferViewUserRequest")[0].style.display = "flex";
}

function hideModalContentMyOffer() {
    document.getElementsByClassName("modalContentMyOffer")[0].style.display = "none";
    document.getElementsByClassName("modalUserMyOfferViewUserRequest")[0].style.display = "none";
    document.getElementsByClassName("modalUserMyOfferCoinToChoose")[0].style.display = "none";
}

function hideAddCoinContainer() {
    modalContent.style.display = "none";
}

function hideMyRequestContainer() {
    document.querySelector('.modalContentMyRequest').style.display = "none";
}

/*Close modal when clicked outside modal*/
window.onclick = function (event) {
    if (event.target === modalContent) {
        modalContent.style.display = "none";
        return true;
    }
    if (event.target === document.getElementsByClassName("swapModalContent")[0]) {
        document.getElementsByClassName("swapModalContent")[0].style.display = "none";
        return true;
    }
    if (event.target === document.getElementsByClassName("modalContentMyOffer")[0]) {
        document.getElementsByClassName("modalContentMyOffer")[0].style.display = "none";
        return true;
    }
    if (event.target === document.getElementsByClassName("modalContentWantThisCoin")[0]) {
        document.getElementsByClassName("modalContentWantThisCoin")[0].style.display = "none";
        return true;
    }
    if (event.target === document.getElementsByClassName("navLinksOnMobile")[0]) {
        showNavLinks();
    }
    var navSearchBtn = document.getElementById("navSearchBtn");
    if (!navSearchBtn.contains(event.target) && navSearchBtn.className == "navSearchBtn navSearchBtnExpanded") {
        expandNavSearch();
    }
}

/*Swap tab modal*/

function showSwapCloseConfirmation(id) {
    if (id === "swapModalDismiss") {
        document.getElementById("swapModalDismiss").style.display = "flex";
        document.getElementById("swapModalCancel").style.display = "none";
    } if (id === "swapModalCancel") {
        document.getElementById("swapModalCancel").style.display = "flex";
        document.getElementById("swapModalDismiss").style.display = "none";
    }
    document.getElementsByClassName("swapModalContent")[0].style.display = "flex";
}

function hideSwapModalContainer() {
    document.getElementsByClassName("swapModalContent")[0].style.display = "none";
}


/*Change swap offer modal*/
function showSwapChangeOfferModal() {
    document.getElementsByClassName("swapChangeOfferModalContent")[0].style.display = "flex";
}

function hideSwapChangeOfferModal() {
    document.getElementsByClassName("swapChangeOfferModalContent")[0].style.display = "none";
}


/*Add new contact modal
function showAddNewContactModal() {
    document.getElementsByClassName("modalContentAddNewContact")[0].style.display = "flex";
}

function hideAddNewContactModal() {
    document.getElementsByClassName("modalContentAddNewContact")[0].style.display = "none";
}
*/


/*'Want this coin' modal*/

function showWantThisCoinContainer() {
    document.getElementsByClassName("modalContentWantThisCoin")[0].style.display = "flex";
    document.getElementsByClassName("modalWantThisCoinConfirm")[0].style.display = "flex";
    document.getElementsByClassName("modalWantThisCoinSwapRequestContainer")[0].style.display = "none";
}

function hideContentWantThisCoin() {
    document.getElementsByClassName("modalContentWantThisCoin")[0].style.display = "none";
    document.getElementsByClassName("modalWantThisCoinSwapRequestContainer")[0].style.display = "none";
}

function showCreateSwapRequest() {
    document.getElementsByClassName("modalWantThisCoinConfirm")[0].style.display = "none";
    document.getElementsByClassName("modalWantThisCoinSwapRequestContainer")[0].style.display = "flex";
}

function getWantThisCoinRangeValue() {
    var wantThisCoinRangeValue = document.getElementById("wantThisCoinRangeInput").value;
    document.getElementsByClassName("wantThisCoinRangeValue")[0].innerHTML = wantThisCoinRangeValue;
}

function fshowCreateSwapRequest(action) {
    if (action == "added") {
        document.getElementsByClassName("wantCoinBtn")[0].style.display = "none";
        document.getElementsByClassName("notWantCoinBtn")[0].style.display = "block";
    }
    if (action == "deleted") {
        document.getElementsByClassName("wantCoinBtn")[0].style.display = "block";
        document.getElementsByClassName("notWantCoinBtn")[0].style.display = "none";
    }
}

function showCreateMyOfferContainer(action) {
    if (action == "create") {
        document.getElementsByClassName("modalUserMyOfferViewUserRequest")[0].style.display = "none";
        document.getElementsByClassName("modalUserMyOfferCoinToChoose")[0].style.display = "flex";
    }
    if (action == "goBack") {
        document.getElementsByClassName("modalUserMyOfferViewUserRequest")[0].style.display = "flex";
        document.getElementsByClassName("modalUserMyOfferCoinToChoose")[0].style.display = "none";
    }
}

function showCreateMyRequestContainer(action) {
    if (action == "create") {
        document.querySelector('.offeredCoinRequestContainer').style.display = 'none';
        document.querySelector('.coinRequestContainer').style.display = 'flex';
    }
    if (action == "goBack") {
        document.querySelector('.offeredCoinRequestContainer').style.display = 'flex';
        document.querySelector('.coinRequestContainer').style.display = 'none';
    }
}
