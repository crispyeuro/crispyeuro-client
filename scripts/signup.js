function validateSignUpForm() {
    if (checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword() && checkTerms()) {
        showSignUpSuccess();
        return false;
    } else {
        checkUsername();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkTerms();
        return false;
    }
}

document.getElementById("fUsername").oninput = function () { checkUsername() };

function checkUsername() {
    var username = document.getElementById("fUsername").value;
    if (username == "") {
        document.getElementById("fUsernameMistake").innerHTML = "Please enter username";
        document.getElementById("fUsernameMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!username.match("^[A-Za-z0-9\,\.\!\?\-\_\*]+$")) {
        document.getElementById("fUsernameMistake").innerHTML = "Allowed letters, numbers, punctuation";
        document.getElementById("fUsernameMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!username.match(/[A-z]/g)) {
        document.getElementById("fUsernameMistake").innerHTML = "Put at least one letter";
        document.getElementById("fUsernameMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (username.length < 3 && username != "") {
        document.getElementById("fUsernameMistake").innerHTML = "Too short username";
        document.getElementById("fUsernameMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (username.length > 20) {
        document.getElementById("fUsernameMistake").innerHTML = "Too long username";
        document.getElementById("fUsernameMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fUsernameMistake").innerHTML = "OK";
        document.getElementById("fUsernameMistake").style.color = "rgb(36, 96, 106)";
        return true;
    }
}

document.getElementById("fEmail").oninput = function () { checkEmail() };

function checkEmail() {
    var email = document.getElementById("fEmail").value;
    if (email == "") {
        document.getElementById("fEmailMistake").innerHTML = "Please enter email";
        document.getElementById("fEmailMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!email.match("^[A-Za-z0-9\,\.\-\_\@*]+$")) {
        document.getElementById("fEmailMistake").innerHTML = 'Not allowed characters';
        document.getElementById("fEmailMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (email.length < 3 && email != "") {
        document.getElementById("fEmailMistake").innerHTML = "Ivalid email";
        document.getElementById("fEmailMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!email.match(/.@./)) {
        document.getElementById("fEmailMistake").innerHTML = 'Should contain "@" mark';
        document.getElementById("fEmailMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fEmailMistake").innerHTML = "OK";
        document.getElementById("fEmailMistake").style.color = "rgb(36, 96, 106)";
        return true;
    }
}

document.getElementById("fPWD").oninput = function () { checkPassword() };

function checkPassword() {
    var password = document.getElementById("fPWD").value;
    var confPassword = document.getElementById("fConfPWD").value;
    if (password == "") {
        document.getElementById("fPWDMistake").innerHTML = "Please enter password";
        document.getElementById("fPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (password != confPassword && confPassword != "") {
        document.getElementById("fConfPWDMistake").innerHTML = "Passwords do not match";
        document.getElementById("fConfPWDMistake").style.color = "rgb(171, 242, 255)";
    }
    if (password.length < 8 && password != "") {
        document.getElementById("fPWDMistake").innerHTML = "Put at least 6 characters";
        document.getElementById("fPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!password.match(/[A-z]/g) || !password.match(/[0-9]/g) || !password.match(/[\,\.\!\?\-\_\*\'\"\`]/g)) {
        document.getElementById("fPWDMistake").innerHTML = "Allowed letters, numbers, punctuation";
        document.getElementById("fPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (password.match(/[\s\t]/g)) {
        document.getElementById("fPWDMistake").innerHTML = "Whitespaces not allowed";
        document.getElementById("fPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fPWDMistake").innerHTML = "OK";
        document.getElementById("fPWDMistake").style.color = "rgb(36, 96, 106)";
        return true;
    }
}

document.getElementById("fConfPWD").oninput = function () { checkConfirmPassword() };

function checkConfirmPassword() {
    var confPassword = document.getElementById("fConfPWD").value;
    var password = document.getElementById("fPWD").value;
    if (!checkPassword() && confPassword == "") {
        document.getElementById("fConfPWDMistake").innerHTML = "";
        document.getElementById("fConfPWDMistake").style.color = "rgb(171, 242, 255)";
        return true;
    }
    if (checkPassword() && confPassword == "") {
        document.getElementById("fConfPWDMistake").innerHTML = "Confirm password";
        document.getElementById("fConfPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (!checkPassword() && confPassword != "") {
        document.getElementById("fConfPWDMistake").innerHTML = "Not correct";
        document.getElementById("fConfPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    if (checkPassword() && password != confPassword) {
        document.getElementById("fConfPWDMistake").innerHTML = "Passwords do not match";
        document.getElementById("fConfPWDMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
    else {
        document.getElementById("fConfPWDMistake").innerHTML = "OK";
        document.getElementById("fConfPWDMistake").style.color = "rgb(36, 96, 106)";
        return true;
    }
}

document.getElementById("fTerms").oninput = function () { checkTerms() };

function checkTerms() {
    if (document.getElementById("fTerms").checked) {
        document.getElementById("fTermsMistake").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("fTermsMistake").innerHTML = "Please accept Terms of Use"
        document.getElementById("fTermsMistake").style.color = "rgb(171, 242, 255)";
        return false;
    }
}

function showSignUpSuccess() {
    document.getElementsByClassName("signUpFormContainer")[0].style.display = "none";
    document.getElementsByClassName("signUpSuccess")[0].style.display = "block";
}

function goBack() {
    window.history.back();
}
