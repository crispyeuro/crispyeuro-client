setUp();

function setUp() {
    let path = window.location.pathname;
    if (path == '/static/coincard.html') {
        setUpCoincard();
    }
    if (path == '/static/commemorativecard.html') {
        setUpCommemorativecard();
    }
    if (path == '/static/countrycard.html') {
        setUpCountrycard();
    }
    if (path == '/static/nominalcard.html') {
        setUpNominalcard();
    }

    setUpGoBackButton();
}

function setUpCoincard() {
    getCoinData();
    getWantedCoin();
    getAddedCoins();
    getSwapWantedCoins();
    getSwapOfferedCoins();
    setUpAddNewCoinBtn();
}

function setUpCommemorativecard() {
    getCommemorativecardUrlValues();
}

function setUpCountrycard() {
    getCountrycardUrlValues();
}

function setUpNominalcard() {
    checkDenominationcardUrlValues();
}

async function setUpGoBackButton() {
    const button = document.querySelector('.goBackBtn');
    button.addEventListener('click', () => {
        window.history.back();
    });
}

async function getCoinData() {
    const apiPath = `/api/getCoinData${window.location.search}`;
    const response = await fetch(apiPath);
    const object = await response.json();
    try {
        if (object.length > 0) {
            loadCoinData(object[0]);
        } else {
            alert(`Can't find any coin with these parameters.`);
        }
    } catch (err) {
        console.log(err);
        alert(`Can't find any coin with these parameters.`);
    }
}

function loadCoinData(coin) {
    let denominationStr = coinNominalText(coin.denomination);

    document.title = "Coin " + denominationStr + " " + coin.issue_year + " " + coin.country;
    document.querySelector('.viewCoincardName').innerHTML = denominationStr + " " + coin.issue_year + " " + coin.country;

    loadCoinDetails(coin, denominationStr);
    loadCoinImage(coin);
    loadCoinMintage(coin);
    loadCoinModalDetails(coin, denominationStr);
}

function loadCoinDetails(coin, denomination) {
    document.querySelector('.viewCoinDenomination').innerHTML = denomination;
    document.querySelector('.viewCoinYear').innerHTML = coin.issue_year;
    document.querySelector('.viewCoinCountry').innerHTML = coin.country;
    document.querySelector('.viewCoinDiameter').innerHTML = coin.diameter + " mm";
    document.querySelector('.viewCoinThickness').innerHTML = coin.thickness + " mm";
    document.querySelector('.viewCoinMass').innerHTML = coin.mass + " g";
    document.querySelector('.viewCoinComposition').innerHTML = coin.composition;
    document.querySelector('.viewCoinEdge').innerHTML = coin.edge;
    document.querySelector('.viewCoinFeature').innerHTML = coin.feature;
    document.querySelector('.viewCoinDesciprtion').innerHTML = coin.coin_description;
}

function loadCoinImage(coin) {
    if (coin.obverse_image_path != null) {
        document.querySelector('.coinPictureContainer').innerHTML =
            `<img src="` + coin.obverse_image_path + `" title="Image source: ` + coin.obverse_image_path + `">`;

        document.querySelector('.coincardImageSource').innerHTML =
            `<div class="textColorDarkBlue">Coin image source:&nbsp</div><a href="` +
            coin.obverse_image_path + `">` + coin.obverse_image_path + `</a>`;
    }
}

function loadCoinMintage(coin) {
    let mintageHTML = `<tr><th>`;

    if (coin.mintage_total != null) {
        mintageHTML += coin.mintage_total.toLocaleString() + `</th><td>`;
    } else {
        mintageHTML += `<span class="textItalic">No data</span></th><td>`;
    }

    mintageHTML += checkNullTableField(coin.uncirculated).toLocaleString() + `</th><td>`;
    mintageHTML += checkNullTableField(coin.brilliant_uncirculated).toLocaleString() + `</th><td>`;
    mintageHTML += checkNullTableField(coin.proof).toLocaleString() + `</th>`;

    document.querySelector('.mintageTable').innerHTML += mintageHTML;

    document.querySelector('.coincardMint').innerHTML = `  ` + checkNullTableField(coin.mint);
    document.querySelector('.coincardMint').innerHTML = `  ` + checkNullTableField(coin.issue_date);
    if (coin.mintage_description != null) {
        document.querySelector('.coincardAdditionalInfo').innerHTML =
            `<div class="textColorDarkBlue">Additional information:&nbsp</div>` + coin.mintage_description;
    }
}

function loadCoinModalDetails(coin, denominationStr) {
    document.querySelector('.addedCoinCoincardNameModal').innerHTML = denominationStr + ' ' + coin.issue_year + ' ' + coin.country;
    document.querySelector('.addedCoinCoincardOfferName').innerHTML = denominationStr + ' ' + coin.issue_year + ' ' + coin.country;
    document.querySelector('.wantThisCoinId').value = coin.coin_id;
    document.querySelector('.wantThisCoinChangeId').value = coin.coin_id;
    document.querySelector('.userWantThisCoinSwapRequestName').innerHTML =
        denominationStr + ' ' + coin.issue_year + ' ' + coin.country + ' coin swap request';
    document.querySelector('.myOfferModalCoinName').innerHTML =
        'Wants <div class="textBold">' + denominationStr + ' ' + coin.issue_year + ' ' + coin.country +
        '</div> coin with these parameters';
}

async function getCommemorativecardUrlValues() {
    const apiPath = `/api/commemorativeCountryRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        displayCommemorativecardVariables(obj);
    } catch (err) {
        alert(err);
    }
}

function displayCommemorativecardVariables(obj) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('coin_type') && urlParams.has('issue_year')) {
        if (urlParams.get('coin_type') == "commemorative_common") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Commemorative common 2 euro " + obj[0].issue_year;
            document.title = "Commemorative common 2 euro " + obj[0].issue_year;
        } if (urlParams.get('coin_type') == "commemorative") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Commemorative 2 euro " + obj[0].issue_year;
            document.title = "Commemorative 2 euro " + obj[0].issue_year;
        } if (urlParams.get('coin_type') == "silver") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Silver coins of " + obj[0].issue_year;
            document.title = "Silver coins of " + obj[0].issue_year;
        } if (urlParams.get('coin_type') == "gold") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Gold coins of " + obj[0].issue_year;
            document.title = "Gold coins of " + obj[0].issue_year;
        }
    }
    if (urlParams.has('coin_type') && urlParams.has('country')) {
        if (urlParams.has('coin_type') && urlParams.get('coin_type') == "commemorative_common") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Commemorative common 2 euro " + obj[0].country;
            document.title = "Commemorative 2 euro " + obj[0].country;
        } if (urlParams.get('coin_type') == "commemorative") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Commemorative 2 euro " + obj[0].country;
            document.title = "Commemorative 2 euro " + obj[0].country;
        } if (urlParams.get('coin_type') == "silver") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Silver coins of " + obj[0].country;
            document.title = "Silver coins of " + obj[0].country;
        } if (urlParams.get('coin_type') == "gold") {
            document.getElementsByClassName("containerName")[0].innerHTML = "Gold coins of " + obj[0].country;
            document.title = "Gold coins of " + obj[0].country;
        }
    }
    let commemorativeCoinTypeResult = displayCommemorativeCoinType(obj, urlParams);
    if (urlParams.has('issue_year')) {
        document.getElementsByClassName("cardDescriptionText")[0].innerHTML = commemorativeCoinTypeResult[1] + "Total " + commemorativeCoinTypeResult[0] + " coins were issued in " + obj[0].issue_year + ".";
    } else {
        document.getElementsByClassName("cardDescriptionText")[0].innerHTML = commemorativeCoinTypeResult[1] + obj[0].country + " issued " + commemorativeCoinTypeResult[0] + " coins.";
    }
}

function displayCommemorativeCoinType(obj, urlParams) {
    let coinsAmount = 0;
    let commonIssueName = "";
    if (urlParams.has('coin_type')) {
        for (i = 0; i < obj.length; i++) {
            if (obj[i].coin_type == urlParams.get('coin_type') || (obj[i].coin_type).includes(urlParams.get('coin_type'))) {
                let coinHTML = ``;
                if (obj[i].coin_id == obj[i].coin_id_added) {
                    coinHTML += `<div class="coin coinAdded">`;
                } else {
                    coinHTML += `<div class="coin">`;
                }

                coinHTML += `<a href="coincard.html?coin_id=` + obj[i].coin_id + `"></a>`;
                if (obj[i].obverse_image_path != null) {
                    coinHTML += `<div class="coinPicContainer"><img src="` + obj[i].obverse_image_path + `" title="Image source: ` + obj[i].obverse_image_path + `"></div>`;
                } else {
                    coinHTML += `<div class="coinPicContainer"><div class="coinPic">PIC</div></div>`;
                }
                coinHTML += `<div class="coinDescription">
                `;
                if (urlParams.has('issue_year')) {
                    coinHTML += obj[i].country + `</div>
                    </div>
                    `;
                } else {
                    if (obj[i].coin_type == "commemorative_common") {
                        coinHTML += obj[i].issue_year + ` Common </div>
                        </div>
                        `;
                    } else {
                        coinHTML += obj[i].issue_year + `</div>
                        </div>
                        `;
                    }
                }
                document.getElementsByClassName("coinsContainer")[0].innerHTML += coinHTML;
                coinsAmount++;
                if (urlParams.get('coin_type') == "commemorative_common" && commonIssueName == "" && obj[i].feature != null) {
                    commonIssueName = "Common issue: " + '<div class="textBold">' + obj[i].feature + '</div>' + ". " + '<br>';
                }
            }
        }
    }
    let commemorativeCoinTypeResult = [];
    commemorativeCoinTypeResult.push(coinsAmount, commonIssueName);
    return commemorativeCoinTypeResult;
}

async function getCountrycardUrlValues() {
    const apiPath = `/api/countryRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        displayCountrycardVariables(obj);
    } catch (err) {
        alert(err);
    }
}

function displayCountrycardVariables(obj) {
    const urlParams = new URLSearchParams(window.location.search);
    document.title = "Coins of " + urlParams.get('country');
    document.getElementsByClassName("containerName")[0].innerHTML = "Coins of " + urlParams.get('country');

    /*Push ordinary coins in array and ordinary coins' issue years in array*/
    let ordinaryCoins = [];
    let ordinaryCoinsYears = [];
    let otherCoins = [];
    let gold = [];
    let silver = [];
    for (i = 0; i < obj.length; i++) {
        if (obj[i].coin_type == "ordinary") {
            ordinaryCoins.push(obj[i]);
            ordinaryCoinsYears.push(obj[i].issue_year);
        }
        if (obj[i].coin_type == "other") {
            otherCoins.push(obj[i]);
        }
        if (obj[i].coin_type == "silver") {
            silver.push(obj[i]);
        }
        if (obj[i].coin_type == "gold") {
            gold.push(obj[i]);
        }
    }
    countrycardDisplayOtherCoins(otherCoins, "OtherDenominations");
    countrycardDisplayOtherCoins(silver, "Silver");
    countrycardDisplayOtherCoins(gold, "Gold");

    /*Display a table of ordinary coins in HTML*/
    let uniqueYears = (uniq(ordinaryCoinsYears));
    let ordinaryCoinsSortedByYears = countrycardOrdinaryCoinsByYears(uniqueYears, ordinaryCoins);
    if (urlParams.get('country') == "Germany") {
        document.getElementById("countrycardOrdinaryContainer").innerHTML = "";
        countrycardDisplayOrdinaryCoinsGermany(ordinaryCoinsSortedByYears, 0, 'Germany-"A"', 'open', 'opened');
        countrycardDisplayOrdinaryCoinsGermany(ordinaryCoinsSortedByYears, 1, 'Germany-"D"', 'close', 'closed');
        countrycardDisplayOrdinaryCoinsGermany(ordinaryCoinsSortedByYears, 2, 'Germany-"F"', 'close', 'closed');
        countrycardDisplayOrdinaryCoinsGermany(ordinaryCoinsSortedByYears, 3, 'Germany-"G"', 'close', 'closed');
        countrycardDisplayOrdinaryCoinsGermany(ordinaryCoinsSortedByYears, 4, 'Germany-"J"', 'close', 'closed');
    } else {
        countrycardDisplayOrdinaryCoins(ordinaryCoinsSortedByYears);
    }

    /*Push commemorative coins in an array*/
    let commemorativeCoins = [];
    for (i = 0; i < obj.length; i++) {
        if (obj[i].coin_type == "commemorative" || obj[i].coin_type == "commemorative_common") {
            commemorativeCoins.push(obj[i]);
        }
    }

    /*Display a table of commemorative coins in HTML*/
    let sortedCommemorativeCoins = commemorativeCoins.sort((a, b) => a.issue_year - b.issue_year);
    countrycardDisplayCommemorativeCoins(sortedCommemorativeCoins);

    /*Display country flag in 'countrycard.html'*/
    countrycardDsiplayFlag();

    /*Display country description in HTML*/
    let description = urlParams.get('country') + " issued " + ordinaryCoins.length + " ordinary coins and " + commemorativeCoins.length + " commemorative coins."
    document.getElementsByClassName("cardDescriptionText")[0].innerHTML = description;
}

function uniq(ordinaryCoinsYears) {
    return Array.from(new Set(ordinaryCoinsYears));
}

function countrycardOrdinaryCoinsByYears(uniqueYears, ordinaryCoins) {
    let sortedOrdinaryCoins = [];
    /*Push an array of issue years and empty array in two-dimensional array*/
    for (i = 0; i < uniqueYears.length; i++) {
        sortedOrdinaryCoins.push([uniqueYears[i], []]);
    }
    /*Push an array of ordinary coins according issue year in two-dimensional array*/
    for (i = 0; i < uniqueYears.length; i++) {
        for (j = 0; j < ordinaryCoins.length; j++) {
            if (uniqueYears[i] == ordinaryCoins[j].issue_year) {
                sortedOrdinaryCoins[i][1].push(ordinaryCoins[j]);
            }
        }
    }
    return sortedOrdinaryCoins;
}

/*Display country flag in 'countrycard.html'*/
function countrycardDsiplayFlag() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlCountry = urlParams.get('country')
    for (m = 0; m < countryArray.length; m++) {
        if (urlCountry == countryArray[m].name) {
            document.getElementsByClassName("countryFlag")[0].innerHTML = '<img src="' + countryArray[m].flagImage + '" alt="' + countryArray[m].name + '" title="' + countryArray[m].title + '" width="64">';
            break;
        }
    }
}

/*Display a table of ordinary coins in 'countrycard.html'*/
function countrycardDisplayOrdinaryCoins(x) {
    for (i = 0; i < x.length; i++) {
        let sortedCoins = x[i][1].sort((a, b) => a.denomination - b.denomination);
        let tableRow =
            `<tr>
        <td class="tableColumnCell">` + x[i][0] + `</td>`
        let denominations = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
        for (k = 0; k < denominations.length; k++) {
            let row = `<td class="tableEmptyCell"></td>`;
            for (l = 0; l < sortedCoins.length; l++) {
                if (denominations[k] == sortedCoins[l].denomination) {
                    if (sortedCoins[l].coin_id == sortedCoins[l].coin_id_added) {
                        row = `<td class="tableCellCenterCoinAdded"><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
                    } else {
                        row = `<td class="tableCellCenter"><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
                    }
                }
            }
            tableRow += row;
        }
        tableRow += `</tr>`
        document.getElementsByClassName("viewOrdinaryCoins")[0].innerHTML += tableRow;
    }
}

function countrycardDisplayOrdinaryCoinsGermany(x, tableNumber, coinMint, click, clicked) {
    document.getElementById("countrycardOrdinaryContainer").innerHTML += `
    <div id="tableName` + tableNumber + `" class="tableNameGermany ` + click + `" onclick="countrycardTableGermanyClicked(` + tableNumber + `)">` + coinMint.replace("-", " ") + `</div>
    <div class="ordinaryCoinsGermany" id="displayOrdinaryCoins` + tableNumber + `" class="` + clicked + `">
    <table class="viewOrdinaryCoins">
        <tr>
            <th>Year</th>
            <th>1 cent</th>
            <th>2 cent</th>
            <th>5 cent</th>
            <th>10 cent</th>
            <th>20 cent</th>
            <th>50 cent</th>
            <th>1 euro</th>
            <th>2 euro</th>
        </tr>
    `;
    for (i = 0; i < x.length; i++) {
        let sortedCoins = x[i][1].sort((a, b) => a.denomination - b.denomination);
        let tableRow =
            `<tr>
        <td class="tableColumnCell">` + x[i][0] + `</td>`
        let denominations = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
        for (k = 0; k < denominations.length; k++) {
            let row = `<td class="tableEmptyCell"></td>`;
            for (l = 0; l < sortedCoins.length; l++) {
                if (denominations[k] == sortedCoins[l].denomination && sortedCoins[l].country == coinMint) {
                    if (sortedCoins[l].coin_id == sortedCoins[l].coin_id_added) {
                        row = `<td class="tableCellCenterCoinAdded"><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
                    } else {
                        row = `<td class="tableCellCenter"><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
                    }
                }
            }
            tableRow += row;
        }
        tableRow += `</tr>`
        document.getElementsByClassName("viewOrdinaryCoins")[tableNumber].innerHTML += tableRow;
    }
    document.getElementById("countrycardOrdinaryContainer").innerHTML += `</table></div>`;
}

/*Display or hide a table of German ordinary coins in 'countrycard.html'*/
function countrycardTableGermanyClicked(tableNumber) {
    if (document.getElementById("tableName" + tableNumber).className == "tableNameGermany open") {
        document.getElementById("displayOrdinaryCoins" + tableNumber).className = "closed";
        document.getElementById("tableName" + tableNumber).className = "tableNameGermany close";
    } else {
        document.getElementById("displayOrdinaryCoins" + tableNumber).className = "opened";
        document.getElementById("tableName" + tableNumber).className = "tableNameGermany open";
    }
}

/*Display or hide a table of coins in 'countrycard.html'*/
function countrycardContainerClicked(containerName) {
    if (document.getElementById("countrycard" + containerName + "Container").className == "opened") {
        document.getElementById("countrycard" + containerName + "Container").className = "closed";
        document.getElementById("countrycard" + containerName + "NameSign").innerHTML = "+";
    } else {
        document.getElementById("countrycard" + containerName + "Container").className = "opened";
        document.getElementById("countrycard" + containerName + "NameSign").innerHTML = "-";
    }
}

/*Display a table of commemorative coins in 'countrycard.html'*/
function countrycardDisplayCommemorativeCoins(commemorativeCoins) {
    for (i = 0; i < commemorativeCoins.length; i++) {
        let mintageString = commemorativeCoins[i].mintage_total;
        if (commemorativeCoins[i].mintage_total != null) {
            mintageString = commemorativeCoins[i].mintage_total.toLocaleString();
        }
        let tableRow =
            `<tr>
            <td class="commemorativeOrderRow tableColumnCell">` + (i + 1) + `</td>`;

        if (commemorativeCoins[i].coin_id == commemorativeCoins[i].coin_id_added) {
            tableRow += `<td class="commemorativeYearRow tableCellCenterCoinAdded">` + commemorativeCoins[i].issue_year + `</td>`;
        } else {
            tableRow += `<td class="commemorativeYearRow">` + commemorativeCoins[i].issue_year + `</td>`;
        }

        if (commemorativeCoins[i].coin_id == commemorativeCoins[i].coin_id_added) {
            tableRow += `<td class="commemorativeFeatureRow tableCellCenterCoinAdded"><a href="coincard.html?coin_id=` + commemorativeCoins[i].coin_id + `">`;
        } else {
            tableRow += `<td class="commemorativeFeatureRow"><a href="coincard.html?coin_id=` + commemorativeCoins[i].coin_id + `">`;
        }

        if (commemorativeCoins[i].coin_type == "commemorative_common") {
            tableRow += `<div class="boldText">Common issue.</div> ` + commemorativeCoins[i].feature + `</a></td>`;
        } else {
            tableRow += commemorativeCoins[i].feature + `</a></td>`;
        }

        if (commemorativeCoins[i].coin_id == commemorativeCoins[i].coin_id_added) {
            tableRow += `<td class="commemorativeMintageRow tableCellCenterCoinAdded">`;
        } else {
            tableRow += `<td class="commemorativeMintageRow">`;
        }

        if (commemorativeCoins[i].mintage_total != null) {
            tableRow += mintageString + `</td>
            </tr>`;
        } else {
            tableRow += `<span class="textItalic">No data</span></td>
            </tr>`;
        }
        document.getElementsByClassName("viewCommemorativeCoins")[0].innerHTML += tableRow;
    }
}

function countrycardDisplayOtherCoins(coins, metal) {
    if (coins.length == 0) {
        document.getElementsByClassName("countrycard" + metal)[0].innerHTML = "";
    } else {
        for (i = 0; i < coins.length; i++) {
            let tableRow =
                `
            <tr>
                <td class="yearRow tableColumnCell">` + coins[i].issue_year + `</td>`;
            if (coins[i].coin_id == coins[i].coin_id_added) {
                tableRow += `
                <td class="nominalRow tableCellCenterCoinAdded">` + coinNominalText(coins[i].denomination) + `</td>
                <td class="featureRow tableCellCenterCoinAdded"><a href="coincard.html?coin_id=` + coins[i].coin_id + `">` + coins[i].feature + `</a></td>
                <td class="mintageRow tableCellCenterCoinAdded">`;
            } else {
                tableRow += `
                <td class="nominalRow">` + coinNominalText(coins[i].denomination) + `</td>
                <td class="featureRow"><a href="coincard.html?coin_id=` + coins[i].coin_id + `">` + coins[i].feature + `</a></td>
                <td class="mintageRow">`;
            }
            if (coins[i].mintage_total != null) {
                let mintageString = coins[i].mintage_total;
                mintageString = coins[i].mintage_total.toLocaleString();
                tableRow += mintageString + `</td>
                </tr>`;
            } else {
                tableRow += `<span class="textItalic">No data</span></td>
                </tr>`;
            }
            document.getElementsByClassName("countrycard" + metal + "Table")[0].innerHTML += tableRow;
        }
    }
}

function coinNominalText(nominal) {
    let nominalText = "";
    if (nominal.includes(".")) {
        const separated = nominal.split(".");
        if (separated.length == 2) {
            if (separated[0] == "0") {
                if (separated[1].charAt(0) == "0") {
                    nominalText = separated[1].substring(1) + " cent";
                } else {
                    nominalText = separated[1] + "0 cent";
                }
            } else {
                nominalText = nominal + " euro";
            }
        } else {
            console.log("Denomination value error");
        }
    } else {
        nominalText += nominal + " euro";
    }
    return nominalText;
}

async function checkDenominationcardUrlValues() {
    const apiPath = `/api/denominationRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        separateDenominationValues(obj);
    } catch (err) {
        alert(err);
    }
}

function separateDenominationValues(result) {
    if (result == "") {
        document.getElementsByClassName("denominationTable")[0].innerHTML =
            `<div class="denominationEmptyTableText">There are no coins in this section`;
    } else {
        let denominationYears = [];
        for (l = 0; l < result.length; l++) {
            if (result[l].coin_type != 'commemorative') {
                denominationYears.push(result[l].issue_year);
            }
        }
        let uniqueDenominationYears = (uniq(denominationYears));
        let sortedUniqueDenominationYears = uniqueDenominationYears.sort((a, b) => a - b);

        let denominationCountries = [];
        for (l = 0; l < result.length; l++) {
            if (result[l].coin_type != 'commemorative') {
                denominationCountries.push(result[l].country);
            }
        }
        let uniqueDenominationCountries = (uniq(denominationCountries));
        let sortedUniqueDenominationCountries = uniqueDenominationCountries.sort();

        let table = `
        <table>
            <tr>
                <th class="columnWidth">Country/Year</th>`;
        for (i = 0; i < sortedUniqueDenominationYears.length; i++) {
            table += `<th class="columnYearsWidth">` + sortedUniqueDenominationYears[i] + `</th>`;
        }
        table += `
        </tr>
        `;
        table += `<tr>`;

        let totalCoinsAmount = 0;
        for (i = 0; i < sortedUniqueDenominationCountries.length; i++) {
            table += `<th class="tableColumnCell">` + sortedUniqueDenominationCountries[i].replace("-", " ") + `</th>`;
            for (k = 0; k < sortedUniqueDenominationYears.length; k++) {
                let cell = `<td class="tableEmptyCell"></td>`;
                for (m = 0; m < result.length; m++) {
                    if (result[m].coin_type != 'commemorative' && result[m].coin_type != 'commemorative_common') {
                        if (sortedUniqueDenominationCountries[i] == result[m].country && sortedUniqueDenominationYears[k] == result[m].issue_year) {
                            if (result[m].coin_id == result[m].coin_id_added) {
                                cell = `<td class="tableCellCenterCoinAdded"><a href="coincard.html?coin_id=` + result[m].coin_id + `">+</a></td>`;
                            } else {
                                cell = `<td class="tableCellCenter"><a href="coincard.html?coin_id=` + result[m].coin_id + `">+</a></td>`;
                            }
                            totalCoinsAmount++;
                        }
                    }
                }
                table += cell;
            }
            table += `</tr>`;
        }
        table += `</tr></table>`;
        document.getElementsByClassName("denominationTable")[0].innerHTML = table;

        let denomination = coinNominalText(result[0].denomination);
        document.title = denomination + " coins";
        document.getElementsByClassName("containerName")[0].innerHTML = denomination + " coins";
        document.getElementsByClassName("cardDescription")[0].innerHTML = "There are " + totalCoinsAmount + " coins with the value of " + denomination + ".";
    }
}

function denominationString(denomination) {
    return coinNominalText(denomination);
}

async function getAddedCoins() {
    const apiPath = `/api/userAddedCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadAddedCoinsCoincard(obj);
            setUpAddedCoinsViewBtn(obj);
        } else {
            document.querySelector('.addedCoinsTable').innerHTML = "";
        }
    } catch (err) {
        console.log(err);
    }
}

function loadAddedCoinsCoincard(obj) {
    document.querySelector('.addedCoinsTable').innerHTML =
        `
    <div class="coincardAddedCoins coincardAddedCoinsHeader">
        <div class="coincardAddedId">Record ID</div>
        <div class="coincardAddedGrade">Grade</div>
        <div class="coincardAddedAmount">Amount</div>
        <div class="coincardAddedDataBtn">More data</div>
        <div class="coincardAddedSwap">Swap availability</div>
        <div class="coincardAddedDeleteBtn">Delete</div>
    </div>
    `;

    for (i = 0; i < obj.length; i++) {
        let row =
            `
        <div class="coincardAddedCoins">
            <div class="coincardAddedId">` + obj[i].added_coin_id + `</div>
            <div class="coincardAddedGrade">`;
        if (obj[i].grade === null) {
            row += `<span class="textItalic">No data</span>`;
        } else {
            row += obj[i].grade;
        }
        row +=
            `
            </div>
            <div class="coincardAddedAmount">` + obj[i].amount + `</div>
            <div class="coincardAddedDataBtn"><a href="#" class="addedCoinViewBtn` + obj[i].added_coin_id + `">View</a>
            </div>
            <form class="coincardAddedSwap coincardAddedSwapCBForm` + obj[i].added_coin_id + `" name="coincardAddedSwap" action="/checkboxAddedCoin" method="post">
                <label for="coincardAddedSwapCB` + obj[i].added_coin_id + `" class="checkboxContainer coincardAddedSwapDisable"
                    id="coincardSwapCheckbox">
                    <input class="addedCoinToSwapId" name="addedCoinToSwapId" type="number" value="`+ obj[i].added_coin_id + `">
                    <input type="checkbox" class="coincardAddedSwapCB" id="coincardAddedSwapCB` + obj[i].added_coin_id + `"
                        name="userCoinSwapAvailable" value="addedCoinAvailable" onclick="sendForm('.coincardAddedSwapCBForm` + obj[i].added_coin_id + `');"`;
        if (obj[i].swap_availability == true) {
            row += ` checked`;
        }
        row +=
            `>
                    <div class="fCheckbox"></div>
                </label>
            </form>
            <form class="coincardAddedDeleteBtn deleteAddedCoinForm` + obj[i].added_coin_id + `" name="deleteAddedCoin" action="/deleteAddedCoin" method="post">
                <input class="addedCoinIdToDelete" name="addedCoinIdToDeleteId" type="number" value="`+ obj[i].added_coin_id + `">
                <div class="deleteBtnContainer">
                        <div class="deleteBtn"></div>
                        <input type="button" class="deleteInput" onclick="sendForm('.deleteAddedCoinForm` + obj[i].added_coin_id + `'); getAddedCoins();">
                    </div>
            </form>
        </div>
        `;
        document.querySelector('.addedCoinsTable').innerHTML += row;
    }
}

function setUpAddedCoinsViewBtn(obj) {
    for (i = 0; i < obj.length; i++) {
        setUpViewBtn(obj[i]);
    }
}

function setUpViewBtn(coin) {
    const button = document.querySelector('.addedCoinViewBtn' + coin.added_coin_id);
    button.addEventListener('click', () => {
        loadAddedCoinModalData(coin);
        showCoinModal();
    });
}

function loadAddedCoinModalData(coin) {
    document.querySelector('.modalName').innerHTML = 'Coin data';
    document.querySelector('.modalMainBtn').value = 'Save';
    document.querySelector('.modalMainBtn').onclick = function () {
        sendForm('.addCoinModalForm'); hideCoinModal(); getAddedCoins();
    };

    document.querySelector('.addedCoinModalCoinId').value = coin.added_coin_id;
    document.querySelector('.addedCoinIdModal').innerHTML = '. Id: ' + coin.added_coin_id;
    document.querySelector('.addedCoinAmount').value = checkNullTableField(coin.amount);
    document.querySelector('.addedCoinGrade').value = checkNullTableField(coin.grade);
    document.querySelector('.addedCoinValue').value = checkNullTableField(coin.coin_value);
    document.querySelector('.addedCoinDesign').value = checkNullTableField(coin.design);
    document.querySelector('.addedCoinInSet').value = checkNullTableField(coin.in_set);
    document.querySelector('.addedCoinComment').value = checkNullTableField(coin.comment);
    document.querySelector('.addedCoinPictureUrl').value = checkNullTableField(coin.image_path);
}

function setUpAddNewCoinBtn() {
    const button = document.querySelector('.addNewCoinBtn');
    button.addEventListener('click', () => {
        emptyAddedCoinModalData();
        loadAddNewCoinModalData();
        showCoinModal();
    });
}

function loadAddNewCoinModalData() {
    document.querySelector('.modalName').innerHTML = 'Add new coin';
    document.querySelector('.modalMainBtn').value = 'Add coin';
    document.querySelector('.modalMainBtn').onclick = function () {
        sendForm('.addCoinModalForm'); hideCoinModal(); getAddedCoins();
    };
}

function showCoinModal() {
    document.querySelector('.modalContent').style.display = 'flex';
}

function hideCoinModal() {
    document.querySelector('.modalContent').style.display = 'none';
}

async function sendForm(formSelectorQuery) {
    const form = document.querySelector(formSelectorQuery);
    const body = new URLSearchParams(new FormData(form)).toString();
    const response = await fetch(form.action, {
        method: 'post',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
    return true;
}

function emptyAddedCoinModalData() {
    document.querySelector('.addedCoinModalCoinId').value = 0;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('coin_id')) {
        document.querySelector('.coinIdModalCoinId').value = urlParams.get('coin_id');
    }

    document.querySelector('.addedCoinIdModal').innerHTML = '';
    document.querySelector('.addedCoinAmount').value = 1;
    document.querySelector('.addedCoinGrade').value = "";
    document.querySelector('.addedCoinValue').value = "";
    document.querySelector('.addedCoinDesign').value = "";
    document.querySelector('.addedCoinInSet').value = "";
    document.querySelector('.addedCoinComment').value = "";
    document.querySelector('.addedCoinPictureUrl').value = "";
}

function showChangeWantedCoinContainer() {
    document.querySelector('.modalContentWantThisCoin').style.display = 'flex';
    document.querySelector('.modalWantThisCoinConfirm').style.display = 'none';
    document.querySelector('.modalWantThisCoinSwapRequestContainer').style.display = 'flex';
}

async function getWantedCoin() {
    const apiPath = `/api/userWantedCoin${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            document.querySelector('.changeWantedCoin').style.display = 'block';
            document.querySelector('.coincardWantThisCoinForm').style.display = 'none';
            loadWantedCoin(obj);
        } else {
            document.querySelector('.changeWantedCoin').style.display = 'none';
            document.querySelector('.coincardWantThisCoinForm').style.display = 'block';
        }
    } catch (err) {
        console.log(err);
    }
}

function loadWantedCoin(result) {
    document.querySelector('.wantThisCoinChangeId').value = result[0].coin_id;
    document.querySelector('.wantedCoinGrade').value = result[0].grade;
    let amount = document.querySelector('.wantedCoinAmount').value;
    if (amount < 1) {
        amount = 1;
    }
    document.querySelector('.wantedCoinAmount').value = amount;
    document.querySelector('.wantedCoinDesign').value = result[0].design;
    document.querySelector('.wantedCoinSet').value = result[0].in_set;
    document.querySelector('.wantedCoinComment').value = result[0].comment;

    document.querySelector('.wantThisCoinDeleteId').value = result[0].wanted_coin_id;
}

async function getSwapWantedCoins() {
    const apiPath = `/api/coincardSwapWantedCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadSwapWantedCoins(obj);
        } else {
            document.querySelector('.coincardOtherUsersRequests').innerHTML = 'No requests';
        }
    } catch (err) {
        console.log(err);
    }
}

function loadSwapWantedCoins(result) {
    const urlParams = new URLSearchParams(window.location.search);
    let coincardCoinId = 0;
    if (urlParams.has('coin_id')) {
        coincardCoinId = urlParams.get('coin_id');
    }

    for (i = 0; i < result.length; i++) {
        if (result[i].coin_id == coincardCoinId) {
            let row =
                `
        <div class="coincardUserSwapOffer" onclick="showCoincardMyOffer(); loadCoincardMyOffer('` + result[i].coin_id + `', '` +
                result[i].wanted_coin_id + `', '` + result[i].username + `', '` + result[i].grade + `', '` + result[i].amount +
                `', '` + result[i].design + `', '` + result[i].in_set + `', '` + result[i].comment + `')">` + result[i].username + `</div>
        `;
            document.querySelector('.coincardOtherUsersRequests').innerHTML += row;
        }
    }
}

function loadCoincardMyOffer(coinId, wantedCoinId, username, grade, amount, design, inSet, comment) {
    document.querySelector('.myOfferUsername').innerHTML = `User <div class="textBold">` + username + `</div> coin swap request`;
    document.querySelector('.myOfferChooseCoinUsername').innerHTML = `Your offer for user <div class="textBold">` + username + `</div>`;
    document.querySelector('.myOfferOtherUserCoinsToSWapName').innerHTML = `Pick a coin you want from user <div class="textBold">` + username + `</div> coins list`;
    document.querySelector('.myOfferOtherUserUsername').value = username;

    document.querySelector('.myOfferCoinId').value = coinId;
    document.querySelector('.myOfferWantedCoinId').value = wantedCoinId;

    document.querySelector('.myOfferModalGrade').value = checkNullTableField(grade);
    document.querySelector('.myOfferModalAmount').value = checkNullTableField(amount);
    document.querySelector('.myOfferModalDesign').value = checkNullTableField(design);
    document.querySelector('.myOfferModalInSet').value = checkNullTableField(inSet);
    document.querySelector('.myOfferModalInComment').value = checkNullTableField(comment);
    document.querySelector('.modalWantThisCoinSwapBtnNext').onclick = function () {
        getSwapCoinsOtherUser(wantedCoinId);
        getSwapCoinsListOffer("'" + wantedCoinId + "'");
        showCreateMyOfferContainer('create');
    }
}

async function getSwapCoinsListOffer() {
    const apiPath = `/api/userAddedCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadCoincardSwapCoinsListOffer(obj);
        } else {
            document.getElementById('modalMyCoinsToOfferList').innerHTML += 'You have no such coins. Write a comment if you want to make an offer.';
        }
    } catch (err) {
        console.log(err);
    }
}

function loadCoincardSwapCoinsListOffer(result) {
    let count = 0;
    document.getElementById('modalMyCoinsToOfferList').innerHTML =
        `
    <br>
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsName">Coin</div>
        <div class="coinSwapSettingsGrade">Grade</div>
        <div class="coinSwapSettingsAmount">Amount</div>
        <div class="coinSwapSettingsDesign">Design</div>
        <div class="coinSwapSettingsSet">Set</div>
        <div class="coinSwapSettingsImage">Image</div>
        <div class="coinSwapSettingsAvailability">To offer</div>
    </div>
    `;
    for (i = 0; i < result.length; i++) {
        if (result[i].swap_availability == true) {
            let coinType = (result[i].coin_type).charAt(0).toUpperCase() + (result[i].coin_type).slice(1);
            coinType = coinType.replace('_', ' ');

            let imagePath;
            if (result[i].image_path != null && result[i].image_path != 'null' && result[i].image_path != '') {
                imagePath = `<a href="` + result[i].image_path + `" target="_blank">View</a>`
            } else {
                imagePath = ``;
            }

            let row =
                `
            <div class="coinSwapSettings" id="swapSettingsCoin` + i + `">
                <div class="coinSwapSettingsName"><div class=textBold>` + coinNominalText(result[i].denomination) + ` ` +
                result[i].issue_year + ` ` + result[i].country +
                `</div><br>` + coinType +
                `</div>
                <div class="coinSwapSettingsGrade">` + checkNullTableField(result[i].grade) + `</div>
                <div class="coinSwapSettingsAmount">` + checkNullTableField(result[i].amount) + `</div>
                <div class="coinSwapSettingsDesign">` + checkNullTableField(result[i].design) + `</div>
                <div class="coinSwapSettingsSet">` + checkNullTableField(result[i].in_set) + `</div>
                <div class="coinSwapSettingsImage">` + imagePath + `</div>
                <div class="coinSwapSettingsAvailability">
                    <label for="modalChooseMyCoin` + result[i].added_coin_id + `" class="checkboxContainer" id="modalSwapCheckbox">
                        <input type="checkbox" class="modalChooseMyCoin" id="modalChooseMyCoin` + result[i].added_coin_id + `" name="coinsToOffer"
                            value="` + result[i].added_coin_id + `">
                        <div class="fCheckbox"></div>
                    </label>
                </div>
            </div>
            `;
            document.getElementById('modalMyCoinsToOfferList').innerHTML += row;
            count++;
        }
    }
    if (count == 0) {
        document.getElementById('modalMyCoinsToOfferList').innerHTML = 'You have no such coins. Write a comment if you want to make an offer.';
    }
}

async function getSwapCoinsOtherUser(wanted_coin_id) {
    const apiPath = `/api/getOtherUserCoinsToSwap?wanted_coin_id=` + wanted_coin_id;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        loadCoincardOtherUserSwapCoinsListOffer(obj);
    } catch (err) {
        console.log(err);
    }
}

function loadCoincardOtherUserSwapCoinsListOffer(result) {
    let count = 0;
    document.querySelector('.coinSwapOtherUserOfferListHead').innerHTML =
        `
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsName">Coin</div>
        <div class="coinSwapSettingsGrade">Grade</div>
        <div class="coinSwapSettingsAmount">Amount</div>
        <div class="coinSwapSettingsDesign">Design</div>
        <div class="coinSwapSettingsSet">Set</div>
        <div class="coinSwapSettingsImage">Image</div>
        <div class="coinSwapSettingsAvailability">To get</div>
    </div>
    `;
    for (i = 0; i < result.length; i++) {
        let coinType = (result[i].coin_type).charAt(0).toUpperCase() + (result[i].coin_type).slice(1);
        coinType = coinType.replace('_', ' ');

        let imagePath;
        if (result[i].image_path != null && result[i].image_path != 'null' && result[i].image_path != '') {
            imagePath = `<a href="` + result[i].image_path + `" target="_blank">View</a>`
        } else {
            imagePath = ``;
        }

        let row =
            `
            <div class="coinSwapSettings" id="swapSettingsCoin` + i + `">
                <div class="coinSwapSettingsName"><div class=textBold>` + coinNominalText(result[i].denomination) + ` ` +
            result[i].issue_year + ` ` + result[i].country +
            `</div><br>` + coinType +
            `</div>
                <div class="coinSwapSettingsGrade">` + checkNullTableField(result[i].grade) + `</div>
                <div class="coinSwapSettingsAmount">` + checkNullTableField(result[i].amount) + `</div>
                <div class="coinSwapSettingsDesign">` + checkNullTableField(result[i].design) + `</div>
                <div class="coinSwapSettingsSet">` + checkNullTableField(result[i].in_set) + `</div>
                <div class="coinSwapSettingsImage">` + imagePath + `</div>
                <div class="coinSwapSettingsAvailability">
                    <label for="modalChooseMyCoin` + result[i].added_coin_id + `" class="checkboxContainer" id="modalSwapCheckbox">
                        <input type="checkbox" class="modalChooseMyCoin" id="modalChooseMyCoin` + result[i].added_coin_id + `" name="coinsToGet"
                            value="` + result[i].added_coin_id + `">
                        <div class="fCheckbox"></div>
                    </label>
                </div>
            </div>
            `;
        document.querySelector('.coinSwapOtherUserOfferListBody').innerHTML += row;
        count++;
    }
    if (count == 0) {
        document.getElementById('modalOtherUserOfferList').innerHTML = 'User has to coins to swap. Write in the comment field which coin you want to swap for.';
    }
}

function checkNullTableField(field) {
    if (field == null || field == 'null') {
        return '';
    } else {
        return field;
    }
}

async function getSwapOfferedCoins() {
    const apiPath = `/api/coincardSwapOfferedCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadSwapOfferedCoins(obj);
        } else {
            document.querySelector('.coincardOtherUsersOffers').innerHTML = 'No offers';
        }
    } catch (err) {
        console.log(err);
    }
}

function loadSwapOfferedCoins(result) {
    const urlParams = new URLSearchParams(window.location.search);
    let coincardCoinId = 0;
    if (urlParams.has('coin_id')) {
        coincardCoinId = urlParams.get('coin_id');
    }

    for (i = 0; i < result.length; i++) {
        if (result[i].coin_id == coincardCoinId) {
            let row =
                `
        <div class="coincardUserSwapOffer" onclick="showCoincardMyRequest(); showCreateMyRequestContainer('goBack'); loadCoincardOtherUserOffer('` + result[i].coin_id + `', '` +
                result[i].added_coin_id + `', '` + result[i].username + `', '` + result[i].grade + `', '` +
                result[i].coin_value + `', '` + result[i].amount + `', '` + result[i].design + `', '` +
                result[i].in_set + `', '` + result[i].image_path + `', '` + result[i].comment + `')">` + result[i].username + `</div>
        `;
            document.querySelector('.coincardOtherUsersOffers').innerHTML += row;
        }
    }
}

function loadCoincardOtherUserOffer(coinId, addedCoinId, username, grade, value, amount, design, inSet, imagePath, comment) {
    document.querySelector('.addedCoinCoincardOfferNameMonal').innerHTML = `User <div class="textBold">` + username + `</div> offer`;
    document.querySelector('.myRequestOtherUserCoinsToSWapName').innerHTML = `<br>User <div class="textBold">` + username + `</div> wanted coins list`;
    document.querySelector('.coinRequestOfferedCoinId').value = addedCoinId;

    document.querySelector('.offeredCoinGrade').value = checkNullTableField(grade);
    document.querySelector('.offeredCoinValue').value = checkNullTableField(value);
    document.querySelector('.offeredCoinAmount').value = checkNullTableField(amount);
    document.querySelector('.offeredCoinDesign').value = checkNullTableField(design);
    document.querySelector('.offeredCoinInSet').value = checkNullTableField(inSet);
    document.querySelector('.offeredCoinComment').value = checkNullTableField(comment);
    document.querySelector('.offeredCoinPictureUrl').value = checkNullTableField(imagePath);
    document.querySelector('.modalRequestThisCoinSwapBtnNext').onclick = function () {
        getWantedCoinsOtherUser(addedCoinId);
        getAddedCoinsToSwap();
        showCreateMyRequestContainer('create');
    }
}

async function getWantedCoinsOtherUser(added_coin_id) {
    const apiPath = `/api/getOtherUserWantedCoins?added_coin_id=` + added_coin_id;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        loadCoincardOtherUserWantedCoinsList(obj);
    } catch (err) {
        console.log(err);
    }
}

function loadCoincardOtherUserWantedCoinsList(result) {
    let count = 0;
    document.getElementById('modalOtherUserReuestList').innerHTML =
        `
    <br>
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsName">Coin</div>
        <div class="coinSwapSettingsGrade">Grade</div>
        <div class="coinSwapSettingsAmount">Amount</div>
        <div class="coinSwapSettingsDesign">Design</div>
        <div class="coinSwapSettingsSet">Set</div>
        <div class="coinSwapSettingsImage"></div>
        <div class="coinSwapSettingsAvailability"></div>
    </div>
    `;
    for (i = 0; i < result.length; i++) {
        let coinType = (result[i].coin_type).charAt(0).toUpperCase() + (result[i].coin_type).slice(1);
        coinType = coinType.replace('_', ' ');

        let row =
            `
            <div class="coinSwapSettings" id="swapSettingsCoin` + i + `">
                <div class="coinSwapSettingsName"><div class=textBold>` + coinNominalText(result[i].denomination) + ` ` +
            result[i].issue_year + ` ` + result[i].country +
            `</div><br>` + coinType +
            `</div>
                <div class="coinSwapSettingsGrade">` + checkNullTableField(result[i].grade) + `</div>
                <div class="coinSwapSettingsAmount">` + checkNullTableField(result[i].amount) + `</div>
                <div class="coinSwapSettingsDesign">` + checkNullTableField(result[i].design) + `</div>
                <div class="coinSwapSettingsSet">` + checkNullTableField(result[i].in_set) + `</div>
                <div class="coinSwapSettingsImage"></div>
                <div class="coinSwapSettingsAvailability"></div>
            </div>
            `;
        document.getElementById('modalOtherUserReuestList').innerHTML += row;
        count++;
    }
    if (count == 0) {
        document.getElementById('modalOtherUserReuestList').innerHTML = 'User has no wanted coins. Write an offer in a comment field.';
    }
}

async function getAddedCoinsToSwap() {
    const apiPath = `/api/getCoinsToSwap`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        loadCoincardAddedCoinsToSwap(obj);
    } catch (err) {
        console.log(err);
    }
}

function loadCoincardAddedCoinsToSwap(result) {
    let count = 0;
    document.querySelector('.coinSwapSettingsHead').innerHTML =
        `
    <div class="coinSwapSettings coinSwapSettingsHeader">
        <div class="coinSwapSettingsName">Coin</div>
        <div class="coinSwapSettingsGrade">Grade</div>
        <div class="coinSwapSettingsAmount">Amount</div>
        <div class="coinSwapSettingsDesign">Design</div>
        <div class="coinSwapSettingsSet">Set</div>
        <div class="coinSwapSettingsImage">Image</div>
        <div class="coinSwapSettingsAvailability">To offer</div>
    </div>
    `;

    document.querySelector('.coinSwapSettingsBody').innerHTML = '';
    for (i = 0; i < result.length; i++) {
        let coinType = (result[i].coin_type).charAt(0).toUpperCase() + (result[i].coin_type).slice(1);
        coinType = coinType.replace('_', ' ');

        let imagePath;
        if (result[i].image_path != null && result[i].image_path != 'null' && result[i].image_path != '') {
            imagePath = `<a href="` + result[i].image_path + `" target="_blank">View</a>`
        } else {
            imagePath = ``;
        }

        let row =
            `
            <div class="coinSwapSettings" id="swapSettingsCoin` + i + `">
                <div class="coinSwapSettingsName"><div class=textBold>` + coinNominalText(result[i].denomination) + ` ` +
            result[i].issue_year + ` ` + result[i].country +
            `</div><br>` + coinType +
            `</div>
                <div class="coinSwapSettingsGrade">` + checkNullTableField(result[i].grade) + `</div>
                <div class="coinSwapSettingsAmount">` + checkNullTableField(result[i].amount) + `</div>
                <div class="coinSwapSettingsDesign">` + checkNullTableField(result[i].design) + `</div>
                <div class="coinSwapSettingsSet">` + checkNullTableField(result[i].in_set) + `</div>
                <div class="coinSwapSettingsImage">` + imagePath + `</div>
                <div class="coinSwapSettingsAvailability">
                    <label for="modalChooseMyCoin` + result[i].added_coin_id + `" class="checkboxContainer" id="modalSwapCheckbox">
                        <input type="checkbox" class="modalChooseMyCoin" id="modalChooseMyCoin` + result[i].added_coin_id + `" name="coinsToGet"
                            value="` + result[i].added_coin_id + `">
                        <div class="fCheckbox"></div>
                    </label>
                </div>
            </div>
            `;
        document.querySelector('.coinSwapSettingsBody').innerHTML += row;
        count++;
    }
    if (count == 0) {
        document.getElementById('modalMyCoinsToOfferForRequestList').innerHTML = 'You have no coins to swap. Write your offer in a comment field.';
    }
}
