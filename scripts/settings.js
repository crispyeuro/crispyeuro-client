'use strict';

import { checkName, checkUsername, checkPassword, checkConfirmPassword, checkEmail, checkAddress, checkTerms, sendForm }
    from './utils/form.js';

setUp();
getUserData();

function setUp() {
    document.getElementById('fName').oninput = function () { checkName('fName', 'fNameMistake'); };
    document.getElementById('fUsername').oninput = function () { checkUsername('fUsername', 'fUsernameMistake'); };
    document.getElementById('fEmail').oninput = function () { checkEmail('fEmail', 'fEmailMistake'); };
    document.getElementById('fPWD').oninput = function () { checkPassword('fPWD', 'fPWDMistake'); };
    document.getElementById('fConfPWD').oninput = function () { checkConfirmPassword('fConfPWD', 'fConfPWDMistake', 'fPWD'); };
    document.getElementById('fAddress').oninput = function () { checkAddress('fAddress', 'fAddressMistake'); };
    document.getElementById('fTerms').oninput = function () { checkTerms('fTerms', 'fTermsMistake'); };
    setChangeUserDataButton();
    setOpenUserSettingsButton();
    setOpenCollectionSettingsButton();
    setVeryAdvancedBtn();
    setTermsOfUseBtn();
    setCloseTermsOfUserModalBtn();
}

async function getUserData() {
    const apiPath = `/api/settingsGetUserData${window.location.search}`;
    const response = await fetch(apiPath);
    const object = await response.json();
    try {
        if (object.length == 1) {
            loadUserData(object[0]);
        }
    } catch (error) {
        console.log(error);
    }
}

function loadUserData(result) {
    document.getElementById('fName').value = result.name;
    document.getElementById('fUsername').value = result.username;
    document.getElementById('fEmail').value = result.email;
    document.getElementById('fAddress').value = result.address;
}

async function setChangeUserDataButton() {
    const button = document.querySelector('.changeUserDataBtn');
    button.addEventListener('click', async () => {
        if (validateChangeUserDataForm()) {
            const error = await sendForm('.changeUserDataForm');
            if (error) {
                document.querySelector('.changeUserDataSuccessInfo').innerHTML = 'Error: ' + error.error + '.';
            } else {
                document.querySelector('.changeUserDataSuccessInfo').innerHTML = 'User data changes successfully saved!';
            }
        }
    });
}

function validateChangeUserDataForm() {
    return [
        checkName('fName', 'fNameMistake'),
        checkUsername('fUsername', 'fUsernameMistake'),
        checkEmail('fEmail', 'fEmailMistake'),
        checkPassword('fPWD', 'fPWDMistake'),
        checkConfirmPassword('fConfPWD', 'fConfPWDMistake', 'fPWD'),
        checkAddress('fAddress', 'fAddressMistake'),
        checkTerms('fTerms', 'fTermsMistake')
    ].every(x => x);
}

async function setOpenUserSettingsButton() {
    const button = document.getElementById('userSettings');
    button.addEventListener('click', async () => {
        loadSettingsTab('userSettings', 'collectionSettings');
    });
}

async function setOpenCollectionSettingsButton() {
    const button = document.getElementById('collectionSettings');
    button.addEventListener('click', async () => {
        loadSettingsTab('collectionSettings', 'userSettings');
    });
}

function loadSettingsTab(idToShow, idToHide) {
    let tab = document.getElementById(idToShow + 'Tab');
    if (tab.className == idToShow + 'Tab closed') {
        tab.className = idToShow + 'Tab opened';
        document.getElementById(idToShow).style.color = 'var(--blue)';

        document.getElementById(idToHide + 'Tab').className = idToHide + 'Tab closed';
        document.getElementById(idToHide).style.color = 'var(--darkerBlue)';
    }
}

async function setVeryAdvancedBtn() {
    const button = document.getElementById('levelVeryAdvancedBtn');
    button.addEventListener('click', async () => {
        changeGermanMintsCheckboxValue();
    });
}

function changeGermanMintsCheckboxValue() {
    let radioLevelVeryAdvanced = document.getElementById('levelVeryAdvanced');
    if (radioLevelVeryAdvanced.checked == true) {
        document.getElementById('setupGermanCoins').checked = true;
    }
}

async function setTermsOfUseBtn() {
    const button = document.getElementById('fTermsLinkBtn');
    button.addEventListener('click', async () => {
        openTermsOfUseModal();
    });
}

function openTermsOfUseModal() {
    let terms =
        `
        1. Crispyeuro can store and process your user data in its database.
        <br>
        2. Crispyeuro does not provide your user data to Third Parties.
        `;
    document.querySelector('.termsOfUseModalContent').innerHTML = terms;

    document.querySelector('.termsOfUseModalWrapper').style.display = 'flex';
}

function setCloseTermsOfUserModalBtn() {
    const sign = document.querySelector('.termsOfUseModalCloseSign');
    sign.addEventListener('click', async () => {
        closeTermsOfUserModal();
    });

    const button = document.querySelector('.termsOfUseModalCloseBtn');
    button.addEventListener('click', async () => {
        closeTermsOfUserModal();
    });
}

function closeTermsOfUserModal() {
    document.querySelector('.termsOfUseModalWrapper').style.display = 'none';
}
