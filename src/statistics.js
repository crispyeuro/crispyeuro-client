'use strict';

setUp();

async function setUp() {
    let addedCoins;
    addedCoins = await getAddedCoins();

    let coins;
    coins = await getCoins();

    loadGeneralChart(addedCoins, coins);
    loadDetailsChart(addedCoins, coins);
}

async function getAddedCoins() {
    const apiPath = `/api/statisticsGetAddedCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const object = await response.json();
    try {
        return object;
    } catch (error) {
        console.log(error);
    }
}

async function getCoins() {
    const apiPath = `/api/statisticsGetCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const object = await response.json();
    try {
        return object;
    } catch (error) {
        console.log(error);
    }
}

async function loadGeneralChart(addedCoins, coins) {
    let collectedCoinsPercent;
    collectedCoinsPercent = await getCollectedPercent(addedCoins.length, coins.length);

    document.querySelector('.chartTextPercent').innerHTML = collectedCoinsPercent + '%';
}

async function loadDetailsChart(addedCoins, coins) {
    let coinsNumbers;
    coinsNumbers = await getCoinsNumbers(coins);
    let addedCoinsNumbers;
    addedCoinsNumbers = await getCoinsNumbers(addedCoins);
    
    document.querySelector('.regular').innerHTML = addedCoinsNumbers.regular + ` of ` + coinsNumbers.regular + ` coins collected`;
    document.querySelector('.commemorative').innerHTML = addedCoinsNumbers.commemorative + ` of ` + coinsNumbers.commemorative + ` coins collected`;
    document.querySelector('.other').innerHTML = addedCoinsNumbers.other + ` of ` + coinsNumbers.other + ` coins collected`;

    let regularPercent = await getCollectedPercent(addedCoinsNumbers.regular, coinsNumbers.regular);
    let commemorativePercent = await getCollectedPercent(addedCoinsNumbers.commemorative, coinsNumbers.commemorative);
    let otherPercent = await getCollectedPercent(addedCoinsNumbers.other, coinsNumbers.other);

    document.querySelector('.statRegularCoinsMeter').style.width = regularPercent + `%`;
    document.querySelector('.regularPercent').innerHTML = regularPercent + `%`;

    document.querySelector('.statCommemorativeCoinsMeter').style.width = commemorativePercent + `%`;
    document.querySelector('.commemorativePercent').innerHTML = commemorativePercent + `%`;

    document.querySelector('.statOtherCoinsMeter').style.width = otherPercent + `%`;;
    document.querySelector('.otherPercent').innerHTML = otherPercent + `%`;

    document.querySelector('.statsTotalCoinsAmount').innerHTML = addedCoins.length + ` of ` + coins.length + ` coins collected`;

    /*Load general chart*/
    loadChart(addedCoins.length, addedCoinsNumbers.regular, addedCoinsNumbers.commemorative, addedCoinsNumbers.other);
}

async function getCoinsNumbers(array) {
    let regular = 0;
    let commemorative = 0;
    let other = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i].coin_type == "ordinary") {
            regular++;
        }
        if (array[i].coin_type == "commemorative" || array[i].coin_type == "commemorative_common") {
            commemorative++;
        }
        if (array[i].coin_type == "other" || array[i].coin_type == "silver" || array[i].coin_type == "gold") {
            other++;
        }
    } 
    return {regular, commemorative, other};
}

async function getCollectedPercent(addedCoinsNumber, coinsNumber) {
    let percent;
    percent = await parseFloat((addedCoinsNumber / coinsNumber) * 100).toFixed(1);
    return percent;
}

async function loadChart(addedCoins, regular, commemorative, other) {
    let regularPercent = await getCollectedPercent(regular, addedCoins);
    let commemorativePercent = await getCollectedPercent(commemorative, addedCoins);
    let otherPercent = await getCollectedPercent(other, addedCoins);

    let secondPart = (parseFloat(regularPercent) + parseFloat(commemorativePercent)).toFixed(1);
    let thirdPart = (parseFloat(secondPart) + parseFloat(otherPercent)).toFixed(1);

    document.querySelector('.chart').style.background = `
    radial-gradient(white 55%, transparent 55.5%), 
    conic-gradient( rgba(52, 123, 152, 1) ` + regularPercent + `%, 
    rgba(39, 93, 114, 1) ` + regularPercent + `%` + secondPart + `%,
    rgba(53, 74, 84, 1) ` + secondPart + `% ` + thirdPart + `%,
    rgba(211, 211, 211, 1) ` + thirdPart + `% 100%)
    `;
}
