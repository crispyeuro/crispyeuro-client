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
        alert("Can't find any coin with these parameters!")
    }
}

function displayCoinVariables(obj) {
    var denominationStr = obj[0].denomination;
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
                    denominationStr = obj[0].denomination + " euro";
                }
            } else {
                console.log("Denomination value mistake")
            }
        } else {
            denominationStr += " euro";
        }
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
    if (urlParams.has('issue_year')) {
        document.getElementsByClassName("containerName")[0].innerHTML += " - " + obj[0].issue_year;
        document.title = "Commemorative 2 euro - " + obj[0].issue_year;
    } else {
        document.getElementsByClassName("containerName")[0].innerHTML += " - " + obj[0].country;
        document.title = "Commemorative 2 euro - " + obj[0].country;
    }
    if (urlParams.has('issue_year')) {
        document.getElementsByClassName("cardDescriptionText")[0].innerHTML = "Total " + obj.length + " coins were issued in " + obj[0].issue_year + ".";
    } else {
        document.getElementsByClassName("cardDescriptionText")[0].innerHTML = obj[0].country + " issued " + obj.length + " coins.";
    }
    for(i=0; i < obj.length; i++) {
        let coinHTML = `
            <div class="coin">
            <a href="coincard.html?coin_id=` + obj[i].coin_id + `"></a>
            <div class="coinPic">PIC</div>
            <div class="coinDescription">
        `;
        if (urlParams.has('issue_year')) {
            coinHTML += obj[i].country + `</div>
            </div>
            `;
        } else {
            if (obj[i].coin_type == 'commemorative_common' && !urlParams.has('issue_year')) {
                coinHTML += obj[i].issue_year + ` Common</div>
                </div>
                `;
            } else {
                coinHTML += obj[i].issue_year + `</div>
            </div>
            `;
        }
        }
        document.getElementsByClassName("coinsContainer")[0].innerHTML += coinHTML;
    }
}

async function getCountrycardUrlValues() {
    const apiPath = `/api/countryRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        displayCountryVariables(obj);
    } catch (err) {
        alert(err);
    }
}

function displayCountryVariables(obj) {
    document.title = "Coins of " + obj[0].country;
    document.getElementsByClassName("containerName")[0].innerHTML = "Coins of " + obj[0].country;
    let ordinaryCoins = [];
    let ordinaryCoinsYears = [];
    for(i = 0; i < obj.length; i++) {
        if(obj[i].coin_type == "ordinary") {
            ordinaryCoins.push(obj[i]);
            ordinaryCoinsYears.push(obj[i].issue_year);
        }
    }
    let uniqueYears = (uniq(ordinaryCoinsYears));
    let x = [];
    for(i = 0; i < uniqueYears.length; i++) {
        x.push([uniqueYears[i], []]);
    }
    for(i = 0; i < uniqueYears.length; i++) {
        for(j = 0; j < ordinaryCoins.length; j++) {
            if (uniqueYears[i] == ordinaryCoins[j].issue_year) {
                x[i][1].push(ordinaryCoins[j]);
            }
        }
    }
    console.log(x);
    for(i = 0; i < x.length; i++) {
        let sortedCoins = x[i][1].sort(function (a, b) {
            return a.denomination - b.denomination;
        });
        let tableRow = 
        `
        <tr >
        <td class="tableColumnCell">` + x[i][0] + `</td>`
        let denominations = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
        for(k = 0; k < denominations.length; k++) {
            let row = `<td class="tableEmptyCell"></td>`;
            for(l = 0; l < sortedCoins.length; l++) {
                if (denominations[k] == sortedCoins[l].denomination) {
                    row = `<td><a href="coincard.html?coin_id=` + sortedCoins[l].coin_id + `">View</a></td>`;
                }
            }
            tableRow += row;
        }
        tableRow += `</tr>`
        document.getElementsByClassName("viewOrdinaryCoins")[0].innerHTML += tableRow;
    }
    
    let commemorativeCoins = [];
    for(i = 0; i < obj.length; i++) {
        if(obj[i].coin_type == "commemorative" || obj[i].coin_type == "commemorative_common") {
            commemorativeCoins.push(obj[i]);
        }
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlCountry = urlParams.get('country')
    for(m = 0; m < countryArray.length; m++) {
        if(urlCountry == countryArray[m].name) {
            document.getElementsByClassName("countryFlag")[0].innerHTML = '<img src="' + countryArray[m].flagImage + '" alt="' + countryArray[m].name + '" title="' + countryArray[m].title + '" width="64">';
            break;
        }
    }
    let description = obj[0].country + " issued " + ordinaryCoins.length + " ordinary coins and " + commemorativeCoins.length + " commemorative coins."
    document.getElementsByClassName("cardDescriptionText")[0].innerHTML = description;
}

function uniq(ordinaryCoinsYears) {
    return Array.from(new Set(ordinaryCoinsYears));
 }
