function checkCoincardAvailableSwap() {
    if (document.getElementById("coincardAvailableSwap").checked == true) {
        document.getElementsByClassName("coincardAddedSwapCB")[0].disabled = true;
        document.getElementsByClassName("coincardAddedSwapDisable")[0].style.opacity = "0.3";
    } else {
        document.getElementsByClassName("coincardAddedSwapCB")[0].disabled = false;
        document.getElementsByClassName("coincardAddedSwapDisable")[0].style.opacity = "1";
    }
}
