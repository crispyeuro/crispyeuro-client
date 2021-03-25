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
