var modalContent = document.getElementsByClassName("modalContent")[0];

function showAddCoinContainer() {
    modalContent.style.display = "flex";
}

function hideAddCoinContainer() {
    modalContent.style.display = "none";
}

/*Close modal when clicked outside modal*/
window.onclick = function(event) {
    if (event.target === modalContent) {
        modalContent.style.display = "none";
    }
}
