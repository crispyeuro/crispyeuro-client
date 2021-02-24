var modalContent = document.getElementsByClassName("modalContent")[0];

function showAddCoinContainer() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "block";
    document.getElementById("modalCoinDataName").style.display = "none";

    document.getElementById("modalAddCoinBtn").style.display = "block";
    document.getElementById("modalSaveCoinBtn").style.display = "none";
}

function showAddedCoinData() {
    modalContent.style.display = "flex";

    document.getElementById("modalAddCoinName").style.display = "none";
    document.getElementById("modalCoinDataName").style.display = "block";

    document.getElementById("modalAddCoinBtn").style.display = "none";
    document.getElementById("modalSaveCoinBtn").style.display = "block";
}

function hideAddCoinContainer() {
    modalContent.style.display = "none";
}

/*Close modal when clicked outside modal*/
window.onclick = function (event) {
    if (event.target === modalContent) {
        modalContent.style.display = "none";
    }
    if (event.target === document.getElementsByClassName("navLinksOnMobile")[0]) {
        showNavLinks();
    }
}
