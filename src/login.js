'use strict';

import { checkEmail, checkPassword, checkUsername, sendForm } from './utils/form.js';

setUp();

function setUp() {
    document.getElementById("fLoginUsername").oninput = function () { checkUsername('fLoginUsername', 'fUsernameError'); };
    document.getElementById("fLoginPassword").oninput = function () { checkPassword('fLoginPassword', 'fPasswordError'); };
    document.getElementById("fForgotPassEmail").oninput = function () { checkEmail('fForgotPassEmail', 'fForgotPassEmailError'); };

    setUpForgetPasswordButton();
    setUpEmailSendButton();
    setUpGoBackToLoginFormButton();
    setUpLoginButton();
    setUpRecoverLoginFormButton();
}

function setUpForgetPasswordButton() {
    const button = document.querySelector('.forgotPasswordBtn');
    button.addEventListener('click', () => {
        document.querySelector('.logInForm').style.display = 'none';
        document.querySelector('.forgotPassForm').style.display = 'flex';
    });
}

function setUpEmailSendButton() {
    const button = document.querySelector('.emailSendBtn');
    button.addEventListener('click', async () => {
        if (validateForgotPassForm()) {
            const error = await sendForm('.forgotPassForm');
            if (error) {
                console.log(error);
            } else {
                showEmailSentSuccessForm();
            }
        }
    });
}

function validateForgotPassForm() {
    return [
        checkEmail('fForgotPassEmail', 'fForgotPassEmailError')
    ].every(x => x);
}

function showEmailSentSuccessForm() {
    document.querySelector('.logInForm').style.display = 'none';
    document.querySelector('.forgotPassForm').style.display = 'none';
    document.querySelector('.recoverAccountForm').style.display = 'flex';
}

function setUpRecoverLoginFormButton() {
    const button = document.querySelector('.recoverLogInBtn');
    button.addEventListener('click', () => {
        showLoginForm();
    });
}

function setUpGoBackToLoginFormButton() {
    const button = document.querySelector('.goBackToLoginFormBtn');
    button.addEventListener('click', () => {
        showLoginForm();
    });
}

function showLoginForm() {
    document.querySelector('.logInForm').style.display = 'flex';
    document.querySelector('.forgotPassForm').style.display = 'none';
    document.querySelector('.recoverAccountForm').style.display = 'none';
}

function setUpLoginButton() {
    const button = document.querySelector('.logInBtn');
    button.addEventListener('click', async () => {
        if (validateLogInForm()) {
            const error = await sendForm('.logInForm');
            if (error) {
                document.querySelector('.loginUnsuccessfulShowMistake').innerHTML = error.error;
                console.log(error);
            }
        }
    });
}

function validateLogInForm() {
    return [
        checkUsername('fLoginUsername', 'fUsernameError'),
        checkPassword('fLoginPassword', 'fPasswordError')
    ].every(x => x);
}
