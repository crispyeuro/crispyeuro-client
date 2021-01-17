function validateLogInForm() {
    if (checkLoginUsername() && checkLoginPassword()) {
        return true;
    } else {
        checkLoginUsername();
        checkLoginPassword();
        return false;
    }
}

document.getElementById("fLoginUsername").oninput = function() {checkLoginUsername();};

function checkLoginUsername() {
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

document.getElementById("fLoginPassword").oninput = function() {checkLoginPassword();};

function checkLoginPassword() {
    var password = document.forms["loginForm"]["fLoginPassword"].value;
    if (password == "") {
        document.getElementById("fPasswordError").innerHTML = "Empty password";
        document.getElementById("fPasswordError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (password.length < 8 && password != "") {
        document.getElementById("fPasswordError").innerHTML = "Too short";
        document.getElementById("fPasswordError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!password.match(/[A-z]/g) || !password.match(/[0-9]/g) || !password.match(/[\,\.\!\?\-\_\*\'\"\`]/g)) {
        document.getElementById("fPasswordError").innerHTML = "Wrong characters";
        document.getElementById("fPasswordError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (password.match(/[\s\t]/g)) {
        document.getElementById("fPasswordError").innerHTML = "Wrong characters";
        document.getElementById("fPasswordError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fPasswordError").innerHTML = "Correct";
        document.getElementById("fPasswordError").style.color = "rgb(36, 96, 106)";
        return true;
    }
}

function showForgotPassForm() {
    document.getElementsByClassName("logInForm")[0].style.display = "none";
    document.getElementsByClassName("forgotPassForm")[0].style.display = "flex";
}

function validateForgotPassForm() {
    var email = document.getElementById("fForgotPassEmail").value;
    if (email == "") {
        document.getElementById("fForgotPassEmailError").innerHTML = "Empty email";
        document.getElementById("fForgotPassEmailError").style.color = "rgb(171, 242, 255)";
        return false;
    } else {
        if (checkForgotPassEmail()) {
            showRecoverAccountForm();
            return false;
        } else {
            return false;
        }
    }
}

document.getElementById("fForgotPassEmail").oninput = function() {checkForgotPassEmail();};

function checkForgotPassEmail() {
    var email = document.getElementById("fForgotPassEmail").value;
    if (email == "") {
        document.getElementById("fForgotPassEmailError").innerHTML = "";
        return false;
    }
    if (!email.match("^[A-Za-z0-9\,\.\-\_\@*]+$") || email.length < 3 && email != "" || !email.match(/.@./)) {
        document.getElementById("fForgotPassEmailError").innerHTML = "Wrong email";
        document.getElementById("fForgotPassEmailError").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fForgotPassEmailError").innerHTML = "Correct";
        document.getElementById("fForgotPassEmailError").style.color = "rgb(36, 96, 106)";
        return true;
    }
}

function showLoginForm() {
    document.getElementsByClassName("logInForm")[0].style.display = "flex";
    document.getElementsByClassName("forgotPassForm")[0].style.display = "none";
    document.getElementsByClassName("recoverAccountForm")[0].style.display = "none";
}

function showRecoverAccountForm() {
    document.getElementsByClassName("logInForm")[0].style.display = "none";
    document.getElementsByClassName("forgotPassForm")[0].style.display = "none";
    document.getElementsByClassName("recoverAccountForm")[0].style.display = "flex";
}
