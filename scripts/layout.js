window.onload = function () {
    document.getElementById("header").innerHTML =
        `<div class="logo"><a href="index.html">Crispyeuro</a></div>
        <nav>
            <div class="navBtnContainer" onclick="showNavLinks()"><div class="navBtn" id="navBtnAction"></div></div>
            <ul class="navLinks" id="navLinksContainer">
                <li>
                    <div class="navSearchBtn" id="navSearchBtn" onclick="expandNavSearch()">
                        <form action="search.html">
                            <div class="navSearchBtnContainer">
                                <div class="navSearchSign"></div>
                                <div class="navSearchSignPart"></div>
                            </div>
                            <button class="navSearchSubmitContainer" type="submit" onkeydown="validateNavSearchSubmitKey(event)">
                                <div class="navSearchSign"></div>
                                <div class="navSearchSignPart"></div>
                            </button>
                            <div class="navSearchInputContainer" id="navSearchInputContainer">
                                <input type="text" name="search" class="navSearchInputCollapsed" id="navSearchInput" onclick="stopParent(event)">
                            </div>
                        </form>
                    </div>
                </li>
                <li><a href="messages.html">Messages</a></li>
                <li><a href="swap.html">Swap</a></li>
                <li><a href="settings.html">Settings</a></li>
                <li><a href="login.html">Log out</a></li>
            </ul>
        </nav>`;

    /*document.getElementsByClassName("navBtnContainer")[0].onclick = function() {showMenu()};*/

    document.getElementsByClassName("menu")[0].innerHTML =
        `<div class="sideNav" id="pcSideNavLinksContainer">
            <div class="sideNavBtnContainer" onclick="showSideNav()">
                <div class="sideNavText">Menu</div>
                <div class="sideNavBtn" id="sideNavBtnAction"></div>
            </div>

            <div class="sideNavUserContainer" onclick="location.href='settings.html';">
                <div class="sideNavUserIconContainer">
                    <div class="userIcon">Us</div>
                </div>
                <div class="sideNavUserText">[Username]</div>
            </div>

            <div class="sideNavMeterName">720 coins collected</div>
            <div class="sideNavMeter">
                <div class="sideNavMeterProgress">45%</div>
            </div>

            <ul class="sideNavLinks" id="sideNavLinksContainer">
                <li><a class="menuLink" href="statistics.html">Statistics</a></li>
                <li><a class="menuLink" href="issueplan.html">Issue plan</a></li>
                <div class="hiddenLinks">
                    <li class="sideNavCategories"><a class="menuLink" href="#" onclick="openCategory('all');return false;">Coin categories</a></li>
                    <li class="sideNavHidden"><a class="menuLink" href="#" onclick="openCategory('countries');return false;">Countries</a></li>
                    <li class="sideNavHidden"><a class="menuLink" href="#" onclick="openCategory('denominations');return false;">Denominations</a></li>
                    <li class="sideNavHidden"><a class="menuLink" href="#" onclick="openCategory('commemorative');return false;">Commemorative</a></li>
                    <li class="sideNavHidden"><a class="menuLink" href="#" onclick="openCategory('silver');return false;">Silver coins</a></li>
                    <li class="sideNavHidden"><a class="menuLink" href="#" onclick="openCategory('gold');return false;">Gold coins</a></li>
                </div>
            </ul>
        </div>`;

    document.getElementById("footer").innerHTML =
        `Crispyeuro 2020-2021`;

    checkHash();
}

function showNavLinks() {
    let navBtnAction = document.getElementById("navBtnAction");
    let menuAction = document.getElementById("navLinksContainer");
    if (menuAction.className == "navLinks") {
        menuAction.className = "navLinksOnMobile";
        navBtnAction.className = "navCloseBtn";
    }
    else {
        menuAction.className = "navLinks";
        navBtnAction.className = "navBtn";
    }
}

function showSideNav() {
    let sideNavBtnAction = document.getElementById("sideNavBtnAction");
    let sideNavAction = document.getElementById("sideNavLinksContainer");
    if (sideNavAction.className == "sideNavLinks") {
        sideNavAction.className = "sideNavLinksOnMobile";
        sideNavBtnAction.className = "sideNavCloseBtn";
    }
    else {
        sideNavAction.className = "sideNavLinks";
        sideNavBtnAction.className = "sideNavBtn";
    }
}

function stopParent(event) {
    event.stopPropagation();
}

function countries(x) {
    let countries = document.getElementById("countries");
    if (x == "open") {
        if (countries.className == "countries hideCountries") {
            countries.className = "countries";
            return true;
        }
    } if (x == "close") {
        if (countries.className == "countries") {
            countries.className = "countries hideCountries";
            return true;
        }
    } if (x == "click") {
        if (countries.className == "countries") {
            countries.className = "countries hideCountries";
            return true;
        } else {
            countries.className = "countries";
            return true;
        }
    }
}

function categoryActionIndex(categoryName, action) {
    let category = document.getElementById(categoryName);
    let categoryHeader = document.getElementById(categoryName + "Header");
    if (action == "open") {
        if (category.className == categoryName + " hide" + categoryName.charAt(0).toUpperCase() + categoryName.slice(1)) {
            category.className = categoryName;
            categoryHeader.className = "displayInline";
            return true;
        }
    } if (action == "close") {
        if (category.className == categoryName) {
            category.className = categoryName + " hide" + categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            categoryHeader.className = "displayInline hide" + categoryName.charAt(0).toUpperCase() + categoryName.slice(1) + "CB";
            return true;
        }
    } if (action == "click") {
        if (category.className == categoryName) {
            category.className = categoryName + " hide" + categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            categoryHeader.className = "displayInline hide" + categoryName.charAt(0).toUpperCase() + categoryName.slice(1) + "CB";
            return true;
        } else {
            category.className = categoryName;
            categoryHeader.className = "displayInline";
            return true;
        }
    }
}

function openCategory(category) {
    window.open("index.html#" + category, "_self");
    checkHash();
}

function checkHash() {
    const x = window.location.hash.substr(1);
    if (x == "all") {
        countries("open");
        categoryActionIndex('denominations', 'open');
        categoryActionIndex('commemorative', 'open');
        categoryActionIndex('silver', 'open');
        categoryActionIndex('gold', 'open');
        return true;
    } if (x == "countries") {
        countries("open");
        categoryActionIndex('denominations', 'close');
        categoryActionIndex('commemorative', 'close');
        categoryActionIndex('silver', 'close');
        categoryActionIndex('gold', 'close');
        return true;
    } if (x == "denominations") {
        countries("close");
        categoryActionIndex('denominations', 'open');
        categoryActionIndex('commemorative', 'close');
        categoryActionIndex('silver', 'close');
        categoryActionIndex('gold', 'close');
        return true;
    } if (x == "commemorative") {
        countries("close");
        categoryActionIndex('denominations', 'close');
        categoryActionIndex('commemorative', 'open');
        categoryActionIndex('silver', 'close');
        categoryActionIndex('gold', 'close');
        return true;
    } if (x == "silver") {
        countries("close");
        categoryActionIndex('denominations', 'close');
        categoryActionIndex('commemorative', 'close');
        categoryActionIndex('silver', 'open');
        categoryActionIndex('gold', 'close');
        return true;
    } if (x == "gold") {
        countries("close");
        categoryActionIndex('denominations', 'close');
        categoryActionIndex('commemorative', 'close');
        categoryActionIndex('silver', 'close');
        categoryActionIndex('gold', 'open');
        return true;
    }
}

function separateCountriesCoinsIndex(obj) {
    let countries = [];
    for (i = 0; i < obj.length; i++) {
        countries.push(obj[i].country);
    }
    let countriesUniq = uniq(countries);
    document.getElementById("countriesList").innerHTML = "";
    let countryList = document.getElementById("countriesList");
    for (i = 0; i < countriesUniq.length; i++) {
        for (k = 0; k < countryArray.length; k++) {
            if (countriesUniq[i] == countryArray[k].name) {
                let countryBtn = document.createElement("img");
                countryBtn.src = countryArray[k].flagImage;
                countryBtn.width = "64";
                countryBtn.alt = (countryArray[k].name).replace("-", " ");
                countryBtn.setAttribute("title", (countryArray[k].name).replace("-", " "));
                countryBtn.className = "country";
                let onClickAttr = document.createAttribute("onclick");
                onClickAttr.value = 'location.href="countrycard.html?country=' + countryArray[k].name + '"';
                countryBtn.setAttributeNode(onClickAttr);
                countryBtn.addEventListener('click', event => event.stopPropagation());
                countryList.appendChild(countryBtn);
            }
        }
    }
}

function separateNominalsCoinsIndex(obj) {
    let nominals = [];
    for (i = 0; i < obj.length; i++) {
        nominals.push(obj[i].denomination);
    }
    let uniqNominals = sortAsc(uniq(nominals));
    let uniqNominalsText = uniqNominalsSortText(uniqNominals);
    loadNominalsIndex(uniqNominals, uniqNominalsText);
}

function uniqNominalsSortText(uniqNominals) {
    let uniqNominalsText = [];
    for (i = 0; i < uniqNominals.length; i++) {
        let nominalText = "";
        if (uniqNominals[i].includes(".")) {
            const separated = (uniqNominals[i]).split(".");
            if (separated.length == 2) {
                if (separated[0] == "0") {
                    if (separated[1].charAt(0) == "0") {
                        nominalText = separated[1].substring(1) + " cent";
                    } else {
                        nominalText = separated[1] + "0 cent";
                    }
                } else {
                    nominalText = uniqNominals[i] + " euro";
                }
            } else {
                console.log("Denomination value mistake")
            }
        } else {
            nominalText += uniqNominals[i] + " euro";
        }
        uniqNominalsText.push(nominalText);
    }
    return uniqNominalsText;
}

function loadNominalsIndex(uniqNominals, uniqNominalsText) {
    let denomCheckBox = document.getElementById("allDenom");
    let denomList = document.getElementById("denomList");
    denomList.textContent = "";
    for (i = 0; i <= uniqNominals.length - 1; i++) {
        if (denomCheckBox.checked != true) {
            if (uniqNominals[i] == "0.01" || uniqNominals[i] == "0.02" || uniqNominals[i] == "0.05" ||
                uniqNominals[i] == "0.1" || uniqNominals[i] == "0.2" || uniqNominals[i] == "0.5" ||
                uniqNominals[i] == "1" || uniqNominals[i] == "2") {
                showNominalsIndex(denomList, uniqNominals[i], uniqNominalsText[i]);
            }
        }
        if (denomCheckBox.checked == true) {
            showNominalsIndex(denomList, uniqNominals[i], uniqNominalsText[i]);
        }
    }
}

function showNominalsIndex(denomList, uniqNominal, uniqNominalText) {
    let element = document.createElement("button");
    element.className = "country";
    let onClickAttr = document.createAttribute("onclick");
    onClickAttr.value = 'location.href="nominalcard.html?denomination=' + uniqNominal + '"';
    element.setAttributeNode(onClickAttr);
    element.addEventListener('click', event => event.stopPropagation());
    let textNode = document.createTextNode(uniqNominalText);
    element.appendChild(textNode);
    denomList.appendChild(element);
}

function sortAsc(coinsArray) {
    return coinsArray.sort((a, b) => parseFloat(a) - parseFloat(b));
}

function separateCommemorativeCoinsIndex(obj) {
    let coinsYears = [];
    let coinsCountries = [];
    for (i = 0; i < obj.length; i++) {
        if (obj[i].coin_type == "commemorative") {
            coinsYears.push(obj[i].issue_year + "");
            coinsCountries.push(obj[i].country);
        }
        if (obj[i].coin_type == "commemorative_common") {
            coinsYears.push(obj[i].issue_year + " Common");
            coinsCountries.push(obj[i].country);
        }
    }
    let coinsYearsUniq = sortAsc(uniq(coinsYears));
    let coinsCountriesUniq = sortAsc(uniq(coinsCountries));
    loadCommemorativeCoinsIndex(coinsYearsUniq, coinsCountriesUniq);
}

function loadCommemorativeCoinsIndex(years, countries) {
    let issuesList = document.getElementById("issuesList");
    let commonIssuesCB = document.getElementById("commonIssuesCB");
    let commemoByYearCB = document.getElementById("commemoByYearCB");
    let commemoByCountryCB = document.getElementById("commemoByCountryCB");
    let commonIssuesLabel = document.getElementById("commonIssuesLabel");
    issuesList.textContent = "";
    if (commonIssuesCB.checked && commemoByYearCB.checked) {
        showCommemorativeCommonByYear(years, issuesList, commonIssuesCB, commonIssuesLabel);
        return true;
    }
    if (commemoByYearCB.checked) {
        showCommemorativeByYear(years, issuesList, commonIssuesCB, commonIssuesLabel);
        return true;
    }
    if (commemoByCountryCB.checked) {
        showCommemorativeByCountry(countries, issuesList, commonIssuesCB, commonIssuesLabel);
        return false;
    }
}

function showCommemorativeCommonByYear(years, issuesList, commonIssuesCB, commonIssuesLabel) {
    if (commonIssuesLabel.className == "checkboxContainer displayInline disabled") {
        commonIssuesLabel.className = "checkboxContainer displayInline";
        commonIssuesCB.disabled = false;
    }
    for (i = 0; i < years.length; i++) {
        let element = document.createElement("button");
        element.className = "country";
        let onClickAttr = document.createAttribute("onclick");
        if (years[i].includes(" Common")) {
            onClickAttr.value = 'location.href="commemorativecard.html?issue_year=' + years[i].replace(" Common", "") +
                '&coin_type=commemorative_common"';
        } else {
            onClickAttr.value = 'location.href="commemorativecard.html?issue_year=' + years[i] +
                '&coin_type=commemorative"';
        }
        let textNode = document.createTextNode(years[i]);
        element.appendChild(textNode);
        element.setAttributeNode(onClickAttr);
        element.addEventListener('click', event => event.stopPropagation());
        issuesList.appendChild(element);
    }
}

function showCommemorativeByYear(years, issuesList, commonIssuesCB, commonIssuesLabel) {
    if (commonIssuesLabel.className == "checkboxContainer displayInline disabled") {
        commonIssuesLabel.className = "checkboxContainer displayInline";
        commonIssuesCB.disabled = false;
    }
    for (i = 0; i < years.length; i++) {
        if (!years[i].includes(" Common")) {
            let element = document.createElement("button");
            element.className = "country";
            let onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="commemorativecard.html?issue_year=' + years[i] +
                '&coin_type=commemorative"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            let textNode = document.createTextNode(years[i]);
            element.appendChild(textNode);
            issuesList.appendChild(element);
        }
    }
}

function showCommemorativeByCountry(countries, issuesList, commonIssuesCB, commonIssuesLabel) {
    if (commonIssuesLabel.className == "checkboxContainer displayInline") {
        commonIssuesLabel.className += " disabled";
        commonIssuesCB.disabled = true;
    }
    for (i = 0; i < countries.length; i++) {
        for (k = 0; k < countryArray.length; k++) {
            if (countries[i] == countryArray[k].name) {
                let countryBtn = document.createElement("img");
                countryBtn.src = countryArray[k].flagImage;
                countryBtn.width = "64";
                countryBtn.alt = countryArray[k].name;
                countryBtn.setAttribute("title", countryArray[k].title);
                countryBtn.className = "country";
                let onClickAttr = document.createAttribute("onclick");
                onClickAttr.value = 'location.href="commemorativecard.html?country=' + countryArray[k].name.replace(/\s/g, '') +
                    '&coin_type=commemorative"';
                countryBtn.setAttributeNode(onClickAttr);
                countryBtn.addEventListener('click', event => event.stopPropagation());
                issuesList.appendChild(countryBtn);
            }
        }
    }
}

async function getCoinsIndex() {
    const apiPath = `/api/indexCoinsRequest${window.location.search}`;
    const response = await fetch(apiPath);
    const obj = await response.json();
    try {
        separateCoinsIndex(obj);
    } catch (err) {
        alert(err);
    }
}

function separateCoinsIndex(obj) {
    separateCountriesCoinsIndex(obj);
    separateNominalsCoinsIndex(obj);
    separateCommemorativeCoinsIndex(obj);
    separateCollectorCoinsIndex("silver", obj);
    separateCollectorCoinsIndex("gold", obj);
}

function separateCollectorCoinsIndex(coinMetal, obj) {
    /*Push coins into array according coin metal*/
    let coins = [];
    for (i = 0; i < obj.length; i++) {
        if (obj[i].coin_type == coinMetal) {
            coins.push(obj[i]);
        }
    }
    /*Push coin Countries and Years into separate arrays*/
    let coinsCountries = [];
    let coinsYears = [];
    for (i = 0; i < coins.length; i++) {
        coinsCountries.push(coins[i].country);
        coinsYears.push(coins[i].issue_year);
    }
    /*load collector coins in Index.html by coin Metal, uniq Years, uniq Countries*/
    loadCollectorCoinsIndex(coinMetal, uniq(coinsYears), uniq(coinsCountries));
}

function uniq(coinValues) {
    return Array.from(new Set(coinValues));
}

function loadCollectorCoinsIndex(coinMetal, years, countries) {
    let coinsByYearRadio = document.getElementById(coinMetal + "ByYearRadio");
    let coinsByCountryRadio = document.getElementById(coinMetal + "ByCountryRadio");
    let coinsList = document.getElementById(coinMetal + "List");
    coinsList.textContent = "";
    if (coinsByYearRadio.checked == true) {
        for (i = 0; i <= years.length - 1; i++) {
            let element = document.createElement("button");
            element.className = "country";
            let onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="commemorativecard.html?issue_year=' + years[i] + '&coin_type=' + coinMetal + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            let textNode = document.createTextNode(years[i]);
            element.appendChild(textNode);
            coinsList.appendChild(element);
        }
    } if (coinsByCountryRadio.checked == true) {
        for (k = 0; k < countries.length; k++) {
            for (country = 0; country <= countryArray.length - 1; country++) {
                if (countries[k] == countryArray[country].name) {
                    let countryBtn = document.createElement("img");
                    countryBtn.src = countryArray[country].flagImage;
                    countryBtn.width = "64";
                    countryBtn.alt = countryArray[country].name;
                    countryBtn.setAttribute("title", countryArray[country].title);
                    countryBtn.className = "country";
                    let onClickAttr = document.createAttribute("onclick");
                    onClickAttr.value = 'location.href="commemorativecard.html?country=' + countryArray[country].name.replace(/\s/g, '') +
                        '&coin_type=' + coinMetal + '"';
                    countryBtn.setAttributeNode(onClickAttr);
                    countryBtn.addEventListener('click', event => event.stopPropagation());
                    coinsList.appendChild(countryBtn);
                }
            }
        }
    }
}

/*Close top navigation when clicked outside opened top nav on mobile*/
window.onclick = function (event) {
    if (event.target === document.getElementsByClassName("navLinksOnMobile")[0]) {
        showNavLinks();
    }
    let navSearchBtn = document.getElementById("navSearchBtn");
    if (!navSearchBtn.contains(event.target) && navSearchBtn.className == "navSearchBtn navSearchBtnExpanded") {
        expandNavSearch();
    }
}

function missingCoinsIndexBtnClick() {
    let btn = document.getElementById("categoriesNameRowBtnId");
    if (btn.className == "categoriesNameRowBtn categoriesMisingCoinsSetup") {
        btn.className = "categoriesNameRowBtn categoriesAllCoinsSetup";
        btn.innerHTML = "Showing all coins";
        /*showMissingCoins = false;*/
        return true;
    }
    if (btn.className == "categoriesNameRowBtn categoriesAllCoinsSetup") {
        btn.className = "categoriesNameRowBtn categoriesMisingCoinsSetup";
        btn.innerHTML = "Showing missing coins";
        /*showMissingCoins = true;*/
        return true;
    }
}

function expandNavSearch() {
    let searchBtn = document.getElementById("navSearchBtn");
    let searchInputContainer = document.getElementById("navSearchInputContainer");
    let navSearchInput = document.getElementById("navSearchInput");
    if (searchBtn.className == "navSearchBtn") {
        searchBtn.className = "navSearchBtn navSearchBtnExpanded";
        searchInputContainer.style.display = "flex";

        /*Focus on search input*/
        navSearchInput.focus();

        /*Display Submit button*/
        document.getElementsByClassName("navSearchBtnContainer")[0].style.display = "none";
        document.getElementsByClassName("navSearchSubmitContainer")[0].style.display = "block";
        return true;
    } if (searchBtn.className == "navSearchBtn navSearchBtnExpanded") {
        searchBtn.className = "navSearchBtn";
        searchInputContainer.style.display = "none";

        /*Lose focus from search input*/
        navSearchInput.blur();

        /*Display Search button*/
        document.getElementsByClassName("navSearchBtnContainer")[0].style.display = "block";
        document.getElementsByClassName("navSearchSubmitContainer")[0].style.display = "none";
        return true;
    }
}

/*When focused on 'Search' input and pressed 'Enter' key*/
function validateNavSearchSubmitKey(event) {
    if (event.keyCode === 13) {
        document.getElementsByClassName("navSearchSubmitContainer")[0].click();
    }
}
