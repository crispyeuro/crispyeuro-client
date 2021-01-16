document.getElementById("fLoginUsername").oninput = function() {validateLogInForm();};

function validateLogInForm() {
    /*var username = document.getElementById("fLoginUsername").value;*/
    var username = document.forms["loginForm"]["fLoginUsername"].value;
    if (username == "") {
        document.getElementById("fUsernameError").innerHTML = "Empty username";
        document.getElementById("fUsernameError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!username.match("^[A-Za-z0-9\,\.\!\?\-\_\*]+$")) {
        document.getElementById("fUsernameError").innerHTML = "Wrong characters";
        document.getElementById("fUsernameError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!username.match(/[A-z]/g)) {
        document.getElementById("fUsernameError").innerHTML = "Include some letters";
        document.getElementById("fUsernameError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (username.length < 3 && username != "") {
        document.getElementById("fUsernameError").innerHTML = "Too short";
        document.getElementById("fUsernameError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (username.length > 20) {
        document.getElementById("fUsernameError").innerHTML = "Too long";
        document.getElementById("fUsernameError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fUsernameError").innerHTML = "Correct";
        document.getElementById("fUsernameError").style.color = "rgb(36, 96, 106)";
        return true;
    }
}
