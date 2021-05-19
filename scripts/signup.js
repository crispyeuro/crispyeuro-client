'use strict';

import { sendForm, checkUsername, checkEmail, checkPassword, checkConfirmPassword, checkTerms } from './utils/form.js';

setUp();

function setUp() {
    document.getElementById("fUsername").oninput = function () { checkUsername('fUsername', 'fUsernameMistake') };
    document.getElementById("fEmail").oninput = function () { checkEmail('fEmail', 'fEmailMistake') };
    document.getElementById("fPWD").oninput = function () { checkPassword('fPWD', 'fPWDMistake') };
    document.getElementById("fConfPWD").oninput = function () { checkConfirmPassword('fConfPWD', 'fConfPWDMistake', 'fPWD') };
    document.getElementById("fTerms").oninput = function () { checkTerms('fTerms', 'fTermsMistake') };
    setUpGoBackButton();
    setUpTermsOfUseBtn();
    setUpTermsOfUseCloseBtn();
    setUpSignUpButton();
}

function setUpGoBackButton() {
    const button = document.querySelector('.goBackBtn');
    button.addEventListener('click', () => {
        //window.history.back();
        window.open("login.html", "_self");
    });
}

async function setUpSignUpButton() {
    const button = document.querySelector('.signUpBtn');
    button.addEventListener('click', async () => {
        if (validateSignUpForm()) {
            const error = await sendForm('.signUpForm');
            if (error) {
                document.querySelector('.signupUnsuccessfulShowMistake').innerHTML = error.error + '<br>';
            } else {
                showSignUpSuccess();
            }
        }
    });
}

function validateSignUpForm() {
    return [
        checkUsername('fUsername', 'fUsernameMistake'),
        checkEmail('fEmail', 'fEmailMistake'),
        checkPassword('fPWD', 'fPWDMistake'),
        checkConfirmPassword('fConfPWD', 'fConfPWDMistake', 'fPWD'),
        checkTerms('fTerms', 'fTermsMistake')
    ].every(x => x);
}

function showSignUpSuccess() {
    document.querySelector('.signUpFormContainer').style.display = 'none';
    document.querySelector('.signUpSuccess').style.display = 'block';
}

function setUpTermsOfUseBtn() {
    const button = document.querySelector('.termsOfUseBtn');
    button.addEventListener('click', () => {
        setTermsOfUseData();
        document.querySelector('.termsOfUseModalWrapper').style.display = 'flex';
    });
}

function setTermsOfUseData() {
    let terms =
        `
        1. Crispyeuro can store and process your user data in its database.
        <br>
        2. Crispyeuro does not provide your user data to Third Parties.
        `;
    document.querySelector('.termsOfUseModalContent').innerHTML = terms;
}

function setUpTermsOfUseCloseBtn() {
    const closeSign = document.querySelector('.termsOfUseModalCloseSign');
    closeSign.addEventListener('click', () => {
        document.querySelector('.termsOfUseModalWrapper').style.display = 'none';
    });
    const button = document.querySelector('.termsOfUseModalCloseBtn');
    button.addEventListener('click', () => {
        document.querySelector('.termsOfUseModalWrapper').style.display = 'none';
    });
}
