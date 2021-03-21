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
