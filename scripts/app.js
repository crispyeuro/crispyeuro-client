function validateSettingsForm() {
    if (checkName() && checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword() &&
        checkBirthdayAndGender() && checkCountry() && checkCity() && checkTerms()) {
        return true;
    } else {
        checkUsername();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkBirthdayAndGender();
        checkCountry();
        checkCity();
        checkTerms();
        return false;
    }
}

document.getElementById("fName").oninput = function () { checkName() };

function checkName() {
    var name = document.getElementById("fName").value;
    if (name == "") {
        document.getElementById("fName").style.backgroundColor = "white";
        document.getElementById("fNameMistake").innerHTML = "";
        document.getElementById("fNameMistake").style.color = "rgba(39, 93, 114, 1)";
        return true;
    }
    if (!name.match("^[A-Za-z\,\.\-]+$")) {
        document.getElementById("fName").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fNameMistake").innerHTML = "Allowed letters and punctuation";
        document.getElementById("fNameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (name.length < 3 && name != "") {
        document.getElementById("fName").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fNameMistake").innerHTML = "Too short name";
        document.getElementById("fNameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!name.match(/[A-z]/g)) {
        document.getElementById("fName").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fNameMistake").innerHTML = "Put at least one letter";
        document.getElementById("fNameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    else {
        document.getElementById("fName").style.backgroundColor = "var(--bgContainerColor)";
        document.getElementById("fNameMistake").innerHTML = "OK";
        document.getElementById("fNameMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fUsername").oninput = function () { checkUsername() };

function checkUsername() {
    var username = document.getElementById("fUsername").value;
    if (username == "") {
        document.getElementById("fUsername").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fUsernameMistake").innerHTML = "Please enter username";
        document.getElementById("fUsernameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!username.match("^[A-Za-z0-9\,\.\!\?\-\_\*]+$")) {
        document.getElementById("fUsername").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fUsernameMistake").innerHTML = "Allowed letters, numbers, punctuation";
        document.getElementById("fUsernameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!username.match(/[A-z]/g)) {
        document.getElementById("fUsername").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fUsernameMistake").innerHTML = "Put at least one letter";
        document.getElementById("fUsernameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (username.length < 3 && username != "") {
        document.getElementById("fUsername").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fUsernameMistake").innerHTML = "Too short username";
        document.getElementById("fUsernameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (username.length > 20) {
        document.getElementById("fUsername").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fUsernameMistake").innerHTML = "Too long username";
        document.getElementById("fUsernameMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    else {
        document.getElementById("fUsername").style.backgroundColor = "var(--bgContainerColor)";
        document.getElementById("fUsernameMistake").innerHTML = "OK";
        document.getElementById("fUsernameMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fEmail").oninput = function () { checkEmail() };

function checkEmail() {
    var email = document.getElementById("fEmail").value;
    if (email == "") {
        document.getElementById("fEmail").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fEmailMistake").innerHTML = "Please enter email";
        document.getElementById("fEmailMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!email.match("^[A-Za-z0-9\,\.\-\_\@*]+$")) {
        document.getElementById("fEmail").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fEmailMistake").innerHTML = 'Not allowed characters';
        document.getElementById("fEmailMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (email.length < 3 && email != "") {
        document.getElementById("fEmail").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fEmailMistake").innerHTML = "Ivalid email";
        document.getElementById("fEmailMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!email.match(/.@./)) {
        document.getElementById("fEmail").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fEmailMistake").innerHTML = 'Should contain "@" mark';
        document.getElementById("fEmailMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    else {
        document.getElementById("fEmail").style.backgroundColor = "var(--bgContainerColor)";
        document.getElementById("fEmailMistake").innerHTML = "OK";
        document.getElementById("fEmailMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fPWD").oninput = function () { checkPassword() };

function checkPassword() {
    var password = document.getElementById("fPWD").value;
    var confPassword = document.getElementById("fConfPWD").value;
    if (password == "") {
        document.getElementById("fPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fPWDMistake").innerHTML = "Please enter password";
        document.getElementById("fPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (password != confPassword && confPassword != "") {
        document.getElementById("fConfPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fConfPWDMistake").innerHTML = "Passwords do not match";
        document.getElementById("fConfPWDMistake").style.color = "rgba(39, 93, 114, 1)";
    }
    if (password.length < 8 && password != "") {
        document.getElementById("fPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fPWDMistake").innerHTML = "Put at least 6 characters";
        document.getElementById("fPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!password.match(/[A-z]/g) || !password.match(/[0-9]/g) || !password.match(/[\,\.\!\?\-\_\*\'\"\`]/g)) {
        document.getElementById("fPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fPWDMistake").innerHTML = "Allowed letters, numbers, punctuation";
        document.getElementById("fPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (password.match(/[\s\t]/g)) {
        document.getElementById("fPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fPWDMistake").innerHTML = "Whitespaces not allowed";
        document.getElementById("fPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    else {
        document.getElementById("fPWD").style.backgroundColor = "var(--bgContainerColor)";
        document.getElementById("fPWDMistake").innerHTML = "OK";
        document.getElementById("fPWDMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fConfPWD").oninput = function () { checkConfirmPassword() };

function checkConfirmPassword() {
    var confPassword = document.getElementById("fConfPWD").value;
    var password = document.getElementById("fPWD").value;
    if (!checkPassword() && confPassword == "") {
        document.getElementById("fConfPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fConfPWDMistake").innerHTML = "";
        document.getElementById("fConfPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return true;
    }
    if (checkPassword() && confPassword == "") {
        document.getElementById("fConfPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fConfPWDMistake").innerHTML = "Confirm password";
        document.getElementById("fConfPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (!checkPassword() && confPassword != "") {
        document.getElementById("fConfPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fConfPWDMistake").innerHTML = "Not correct";
        document.getElementById("fConfPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    if (checkPassword() && password != confPassword) {
        document.getElementById("fConfPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fConfPWDMistake").innerHTML = "Passwords do not match";
        document.getElementById("fConfPWDMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    else {
        document.getElementById("fConfPWD").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fConfPWDMistake").innerHTML = "OK";
        document.getElementById("fConfPWDMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fBirthday").oninput = function () { checkBirthdayAndGender() };
document.getElementById("fMale").oninput = function () { checkBirthdayAndGender() };
document.getElementById("fFemale").oninput = function () { checkBirthdayAndGender() };

function checkBirthdayAndGender() {
    var birthday = document.getElementById("fBirthday").value;
    if (birthday == "" && !document.getElementById("fMale").checked && !document.getElementById("fFemale").checked) {
        document.getElementById("fBirthdayAndGenderMistake").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("fBirthdayAndGenderMistake").innerHTML = "OK";
        document.getElementById("fBirthdayAndGenderMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fCountry").oninput = function () { checkCountry() };

function checkCountry() {
    var country = document.getElementById("fCountry").value;
    if (country == "") {
        document.getElementById("fCountryMistake").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("fCountryMistake").innerHTML = "OK";
        document.getElementById("fCountryMistake").style.color = "green";
        return true;
    }
}

document.getElementById("fCity").oninput = function () { checkCity() };

function checkCity() {
    var city = document.getElementById("fCity").value;
    if (city == "") {
        document.getElementById("fCity").style.backgroundColor = "var(--bgContainerColor)";
        document.getElementById("fCityMistake").innerHTML = "";
        return true;
    }
    if (!city.match("^[A-Za-z\,\.\-]+$")) {
        document.getElementById("fCity").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fCityMistake").innerHTML = "Allowed letters, punctuation";
        document.getElementById("fCityMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
    else {
        document.getElementById("fCity").style.backgroundColor = "rgba(212, 237, 247, 0.8)";
        document.getElementById("fCityMistake").innerHTML = "OK";
        document.getElementById("fCityMistake").style.color = "green";
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
        document.getElementById("fTermsMistake").style.color = "rgba(39, 93, 114, 1)";
        return false;
    }
}

function goBack() {
    window.history.back();
}
