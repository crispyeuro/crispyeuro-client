function swapOthersRequestShow(x) {
    if (document.getElementById(x).className == "swapUserRequestContainer opened") {
        document.getElementById(x).className = "swapUserRequestContainer closed";
        return true;
    }
    if (document.getElementById(x).className == "swapUserRequestContainer closed") {
        document.getElementById(x).className = "swapUserRequestContainer opened";
        return true;
    }
}
