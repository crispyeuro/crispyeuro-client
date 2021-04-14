function checkCoincardAvailableSwap() {
    if (document.getElementById("coincardAvailableSwap").checked == true) {
        document.getElementsByClassName("coincardAddedSwapCB")[0].disabled = true;
        document.getElementsByClassName("coincardAddedSwapDisable")[0].style.opacity = "0.3";
    } else {
        document.getElementsByClassName("coincardAddedSwapCB")[0].disabled = false;
        document.getElementsByClassName("coincardAddedSwapDisable")[0].style.opacity = "1";
    }
}

async function checkCoincardHash() {
    const apiPath = `/api/lala${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    console.log(obj);
    try {
        displayCoinVariables(obj);
    } catch (err) {
        console.log(`Can't find any coin with these parameters.`);
    }
}

function displayCoinVariables(obj) {
    let denominationStr = coinNominalText(obj[0].denomination);

    document.title = "Coin " + denominationStr + " " + obj[0].issue_year + " " + obj[0].country;
    document.getElementsByClassName("viewCoincardName")[0].innerHTML = denominationStr + " " + obj[0].issue_year + " " + obj[0].country;
    document.getElementsByClassName("viewCoinDenomination")[0].innerHTML = denominationStr;
    document.getElementsByClassName("viewCoinYear")[0].innerHTML = obj[0].issue_year;
    document.getElementsByClassName("viewCoinCountry")[0].innerHTML = obj[0].country;
    document.getElementsByClassName("viewCoinDiameter")[0].innerHTML = obj[0].diameter + " mm";
    document.getElementsByClassName("viewCoinThickness")[0].innerHTML = obj[0].thickness + " mm";
    document.getElementsByClassName("viewCoinMass")[0].innerHTML = obj[0].mass + " g";
    document.getElementsByClassName("viewCoinComposition")[0].innerHTML = obj[0].composition;
    document.getElementsByClassName("viewCoinEdge")[0].innerHTML = obj[0].edge;
    document.getElementsByClassName("viewCoinFeature")[0].innerHTML = obj[0].feature;
    document.getElementsByClassName("viewCoinDesciprtion")[0].innerHTML = obj[0].coin_description;
    if (obj[0].obverse_image_path != null) {
        document.getElementsByClassName("coinPictureContainer")[0].innerHTML = `<img src="` +
            obj[0].obverse_image_path + `" title="Image source: ` + obj[0].obverse_image_path + `">`;
        document.getElementsByClassName("coincardImageSource")[0].innerHTML = `<div class="textColorDarkBlue">Coin image source:&nbsp</div><a href="` +
            obj[0].obverse_image_path + `">` + obj[0].obverse_image_path + `</a>`;
    }

    let mintageHTML = `
        <tr>
            <th>`;
    if (obj[0].mintage_total != null) {
        mintageHTML += obj[0].mintage_total.toLocaleString() + `</th>
            <td>`;
    } else {
        mintageHTML += `<span class="textItalic">No data</span></th>
            <td>`;
    }
    if (obj[0].uncirculated != null) {
        mintageHTML += obj[0].uncirculated.toLocaleString() + `</th>
            <td>`;
    } else {
        mintageHTML += `</th>
            <td>`;
    }
    if (obj[0].brilliant_uncirculated != null) {
        mintageHTML += obj[0].brilliant_uncirculated.toLocaleString() + `</th>
            <td>`;
    } else {
        mintageHTML += `</th>
            <td>`;
    }
    if (obj[0].proof != null) {
        mintageHTML += obj[0].proof.toLocaleString() + `</th>`;
    } else {
        mintageHTML += `</th>`;
    }
    document.getElementsByClassName("mintageTable")[0].innerHTML += mintageHTML;
    if (obj[0].mint != null) {
        document.getElementsByClassName("coincardMint")[0].innerHTML = `  ` + obj[0].mint;
    }
    if (obj[0].issue_date != null) {
        document.getElementsByClassName("coincardIssueDate")[0].innerHTML = ` ` + obj[0].issue_date;
    }
    if (obj[0].mintage_description != null) {
        document.getElementsByClassName("coincardAdditionalInfo")[0].innerHTML = `<div class="textColorDarkBlue">Additional information:&nbsp</div>` + obj[0].mintage_description;
    }

    document.querySelector('.addedCoinCoincardNameModal').innerHTML = denominationStr + ' ' + obj[0].issue_year + ' ' + obj[0].country;
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
    console.log(obj);
    let coinsAmount = 0;
    let commonIssueName = "";
    if (urlParams.has('coin_type')) {
        for (i = 0; i < obj.length; i++) {
            if (obj[i].coin_type == urlParams.get('coin_type') || (obj[i].coin_type).includes(urlParams.get('coin_type'))) {
                let coinHTML = `
                <div class="coin">
                <a href="coincard.html?coin_id=` + obj[i].coin_id + `"></a>`;
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
                    row = `<td class="tableCellCenter"><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
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
    <div id="displayOrdinaryCoins` + tableNumber + `" class="` + clicked + `">
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
                    row = `<td class="tableCellCenter"><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
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
            <td class="commemorativeOrderRow">` + (i + 1) + `</td>
            <td class="commemorativeYearRow">` + commemorativeCoins[i].issue_year + `</td>
            <td class="commemorativeFeatureRow"><a href="coincard.html?coin_id=` + commemorativeCoins[i].coin_id + `">`;
        if (commemorativeCoins[i].coin_type == "commemorative_common") {
            tableRow += `<div class="boldText">Common issue.</div> ` + commemorativeCoins[i].feature + `</a></td>
                <td class="commemorativeMintageRow">`;
        } else {
            tableRow += commemorativeCoins[i].feature + `</a></td>
                <td class="commemorativeMintageRow">`;
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
                <td class="yearRow">` + coins[i].issue_year + `</td>
                <td class="nominalRow">` + coinNominalText(coins[i].denomination) + `</td>
                <td class="featureRow"><a href="coincard.html?coin_id=` + coins[i].coin_id + `">` + coins[i].feature + `</a></td>
                <td class="mintageRow">`;
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
            console.log("Denomination value mistake")
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
            table += `<th>` + sortedUniqueDenominationCountries[i].replace("-", " ") + `</th>`;
            for (k = 0; k < sortedUniqueDenominationYears.length; k++) {
                let cell = `<td class="tableEmptyCell"></td>`;
                for (m = 0; m < result.length; m++) {
                    if (result[m].coin_type != 'commemorative') {
                        if (sortedUniqueDenominationCountries[i] == result[m].country && sortedUniqueDenominationYears[k] == result[m].issue_year) {
                            cell = `<td class="tableCellCenter"><a href="coincard.html?coin_id=` + result[m].coin_id + `">+</a></td>`;
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

        let denomination = denominationString(result[0].denomination);
        document.title = denomination + " coins";
        document.getElementsByClassName("containerName")[0].innerHTML = denomination + " coins";
        document.getElementsByClassName("cardDescription")[0].innerHTML = "There are " + totalCoinsAmount + " coins with the value of " + denomination + ".";
    }
}

function denominationString(denomination) {
    let denominationStr = denomination;
    if (denominationStr.includes(".")) {
        const separated = (denominationStr).split(".");
        if (separated.length == 2) {
            if (separated[0] == "0") {
                if (separated[1].charAt(0) == "0") {
                    denominationStr = separated[1].substring(1) + " cent";
                } else {
                    denominationStr = separated[1] + "0  cent";
                }
            } else {
                denominationStr = denominationStr + " euro";
            }
        } else {
            console.log("Denomination value mistake");
        }
    } else {
        denominationStr += " euro";
    }
    return denominationStr;
}

async function getAddedCoins() {
    const apiPath = `/api/userAddedCoins${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        if (obj.length > 0) {
            loadAddedCoinsCoincard(obj);
        } else {
            document.querySelector('.addedCoinsTable').innerHTML = "";
        }
    } catch (err) {
        console.log('Failed to load added coin.');
    }
}

function loadAddedCoinsCoincard(obj) {
    document.querySelector('.addedCoinsTable').innerHTML =
        `
    <div class="coincardAddedCoins coincardAddedCoinsHeader">
        <div class="coincardAddedId">ID</div>
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
            <div class="coincardAddedDataBtn"><a href="#" onclick="loadAddedCoinModalData(` +
            obj[i].added_coin_id + `,'` + obj[i].grade + `',` + obj[i].amount + `,'` + obj[i].coin_value + `','` +
            obj[i].comment + `','` + obj[i].design + `','` + obj[i].image_path + `','` + obj[i].in_set +
            `',` + obj[i].swap_availability + `); showAddedCoinDataModal(); return false;">View</a>
            </div>
            <div class="coincardAddedSwap">
                <label for="coincardAddedSwapCB" class="checkboxContainer coincardAddedSwapDisable"
                    id="coincardSwapCheckbox">
                    <input type="checkbox" class="coincardAddedSwapCB" id="coincardAddedSwapCB"
                        name="userCoinSwapAvailable" value="addedCoinAvailable">
                    <div class="fCheckbox"></div>
                </label>
            </div>
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

function loadAddedCoinModalData(coinId, grade, amount, value, comment, design, imagePath, inSet, swapAvailability) {
    document.querySelector('.addedCoinModalCoinId').value = coinId;

    document.querySelector('.addedCoinIdModal').innerHTML = '. Id: ' + coinId;
    document.querySelector('.addedCoinAmount').value = amount;
    if (grade === "null") {
        document.querySelector('.addedCoinGrade').value = "";
    } else {
        document.querySelector('.addedCoinGrade').value = grade;
    }
    if (value === "null") {
        document.querySelector('.addedCoinValue').value = "";
    } else {
        document.querySelector('.addedCoinValue').value = value;
    }
    if (design === "null") {
        document.querySelector('.addedCoinDesign').value = "";
    } else {
        document.querySelector('.addedCoinDesign').value = design;
    }
    if (inSet === "null") {
        document.querySelector('.addedCoinInSet').value = "";
    } else {
        document.querySelector('.addedCoinInSet').value = inSet;
    }
    if (comment === "null") {
        document.querySelector('.addedCoinComment').value = "";
    } else {
        document.querySelector('.addedCoinComment').value = comment;
    }
    if (imagePath === "null") {
        document.querySelector('.addedCoinPictureUrl').value = "";
    } else document.querySelector('.addedCoinPictureUrl').value = imagePath;
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
    if(urlParams.has('coin_id')) {
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
