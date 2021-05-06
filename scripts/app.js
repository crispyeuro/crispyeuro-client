'use strict';

import { checkEmail, checkPassword, checkUsername, sendForm } from './utils/form.js';

setUp();
getUserData();

function setUp() {
    document.getElementById("fUsername").oninput = function () { checkUsername('fUsername', 'fUsernameMistake'); };
}

async function getUserData() {
    const apiPath = `/api/settingsGetUserData${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        console.log(obj);
        if (obj.length == 1) {
            loadUserData(obj[0]);
        }
    } catch (error) {
        console.log(error);
    }
}

function loadUserData(result) {
    document.getElementById("fName").value = result.name;
    document.getElementById("fUsername").value = result.username;
    document.getElementById("fEmail").value = result.email;
    document.getElementById("fAddress").value = result.address;

}
