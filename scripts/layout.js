window.onload = function () {
    document.getElementById("header").innerHTML =
        `<div class="logo"><a href="index.html">Crispyeuro</a></div>
        <nav>
            <div class="navBtnContainer" onclick="showNavLinks()"><div class="navBtn" id="navBtnAction"></div></div>
            <ul class="navLinks" id="navLinksContainer">
                <li><a href="#messages">Messages</a></div></li>
                <li><a href="#swap">Swap</a></div></li>
                <li><a href="settings.html">Settings</a></div></li>
                <li><a href="login.html">Log out</a></div></li>
            </ul>
        </nav>`;

    /*document.getElementsByClassName("navBtnContainer")[0].onclick = function() {showMenu()};*/

    document.getElementsByClassName("menu")[0].innerHTML =
        `
        <div class="sideNav" id="pcSideNavLinksContainer">
        <br>
        <div class="sideNavBtnContainer" onclick="showSideNav()">
            <div class="sideNavText">Menu</div>
            <div class="sideNavBtn" id="sideNavBtnAction"></div>
        </div>
        I have 40 coins
            <div class="myCoinsAmountMeter">
                <div class="myCoinsAmountProgress">40%</div>
            </div><br>

            <ul class="sideNavLinks" id="sideNavLinksContainer">
                <li><a href="statistics.html">Statistics</a></li>
                <div class="hiddenLinks">
                    <li class="sideNavCategories"><a href="#" onclick="openAll();return false;">All categories</a></li>
                    <li class="sideNavHidden"><a href="#" onclick="openCountries();return false;">Countries</a></li>
                    <li class="sideNavHidden"><a href="#" onclick="openDenominations();return false;">Denominations</a></li>
                    <li class="sideNavHidden"><a href="#" onclick="openCommemorative();return false;">Commemorative</a></li>
                    <li class="sideNavHidden"><a href="#" onclick="openColored();return false;">Colored coins</a></li>
                    <li class="sideNavHidden"><a href="#" onclick="openSilver();return false;">Silver coins</a></li>
                    <li class="sideNavHidden"><a href="#" onclick="openGold();return false;">Gold coins</a></li>
                </div>
            </ul>
        </div>`;

    document.getElementById("footer").innerHTML =
        `Crispyeuro 2020-2021`;

    checkHash();
}

function showNavLinks() {
    var navBtnAction = document.getElementById("navBtnAction");
    var menuAction = document.getElementById("navLinksContainer");
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
    var sideNavBtnAction = document.getElementById("sideNavBtnAction");
    var sideNavAction = document.getElementById("sideNavLinksContainer");
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
    var countries = document.getElementById("countries");
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
    } if (x == "check") {
        if (countries.className == "countries") {
            countries.className = "countries hideCountries";
            return true;
        } else {
            countries.className = "countries";
            return true;
        }
    }
}

function denominations(x) {
    var denominations = document.getElementById("denominations");
    var denominationsHeader = document.getElementById("denominationsHeader");
    if (x == "open") {
        if (denominations.className == "denominations hideDenominations") {
            denominations.className = "denominations";
            denominationsHeader.className = "displayInline";
            return true;
        }
    } if (x == "close") {
        if (denominations.className == "denominations") {
            denominations.className = "denominations hideDenominations";
            denominationsHeader.className = "displayInline hideDenominationsCheckbox";
            return true;
        }
    } if (x == "check") {
        if (denominations.className == "denominations") {
            denominations.className = "denominations hideDenominations";
            denominationsHeader.className = "displayInline hideDenominationsCheckbox";
            return true;
        } else {
            denominations.className = "denominations";
            denominationsHeader.className = "displayInline";
            return true;
        }
    }
}

function commemorative(x) {
    var commemorative = document.getElementById("commemorative");
    var commemorativeHeader = document.getElementById("commemorativeHeader");
    if (x == "open") {
        if (commemorative.className == "commemorative hideCommemorative") {
            commemorative.className = "commemorative";
            commemorativeHeader.className = "displayInline";
            return true;
        }
    } if (x == "close") {
        if (commemorative.className == "commemorative") {
            commemorative.className = "commemorative hideCommemorative";
            commemorativeHeader.className = "displayInline hideCommemorativeCheckbox";
            return true;
        }
    } if (x == "check") {
        if (commemorative.className == "commemorative") {
            commemorative.className = "commemorative hideCommemorative";
            commemorativeHeader.className = "displayInline hideCommemorativeCheckbox";
            return true;
        } else {
            commemorative.className = "commemorative";
            commemorativeHeader.className = "displayInline";
            return true;
        }
    }
}

function colored(x) {
    var colored = document.getElementById("colored");
    var coloredHeader = document.getElementById("coloredHeader");
    if (x == "open") {
        if (colored.className == "colored hideColored") {
            colored.className = "colored";
            coloredHeader.className = "displayInline";
            return true;
        }
    } if (x == "close") {
        if (colored.className == "colored") {
            colored.className = "colored hideColored";
            coloredHeader.className = "displayInline hideColoredCB";
            return true;
        }
    } if (x == "check") {
        if (colored.className == "colored") {
            colored.className = "colored hideColored";
            coloredHeader.className = "displayInline hideColoredCB";
            return true;
        } else {
            colored.className = "colored";
            coloredHeader.className = "displayInline";
            return true;
        }
    }
}

function silver(x) {
    var silver = document.getElementById("silver");
    var silverHeader = document.getElementById("silverHeader");
    if (x == "open") {
        if (silver.className == "silver hideSilver") {
            silver.className = "silver";
            silverHeader.className = "displayInline";
            return true;
        }
    } if (x == "close") {
        if (silver.className == "silver") {
            silver.className = "silver hideSilver";
            silverHeader.className = "displayInline hideSilverCB";
            return true;
        }
    } if (x == "check") {
        if (silver.className == "silver") {
            silver.className = "silver hideSilver";
            silverHeader.className = "displayInline hideSilverCB";
            return true;
        } else {
            silver.className = "silver";
            silverHeader.className = "displayInline";
            return true;
        }
    }
}

function gold(x) {
    var gold = document.getElementById("gold");
    var goldHeader = document.getElementById("goldHeader");
    if (x == "open") {
        if (gold.className == "gold hideGold") {
            gold.className = "gold";
            goldHeader.className = "displayInline";
            return true;
        }
    } if (x == "close") {
        if (gold.className == "gold") {
            gold.className = "gold hideGold";
            goldHeader.className = "displayInline hideGoldCB";
            return true;
        }
    } if (x == "check") {
        if (gold.className == "gold") {
            gold.className = "gold hideGold";
            goldHeader.className = "displayInline hideGoldCB";
            return true;
        } else {
            gold.className = "gold";
            goldHeader.className = "displayInline";
            return true;
        }
    }
}

function openAll() {
    window.open("index.html#all", "_self");
    checkHash();
}

function openCountries() {
    window.open("index.html#countries", "_self");
    checkHash();
}

function openDenominations() {
    window.open("index.html#denominations", "_self");
    checkHash();
}

function openCommemorative() {
    window.open("index.html#commemorative", "_self");
    checkHash();
}

function openColored() {
    window.open("index.html#colored", "_self");
    checkHash();
}

function openSilver() {
    window.open("index.html#silver", "_self");
    checkHash();
}

function openGold() {
    window.open("index.html#gold", "_self");
    checkHash();
}

function checkHash() {
    const x = window.location.hash.substr(1);
    if (x == "all") {
        countries("open");
        denominations("open");
        commemorative("open");
        colored("open");
        silver("open");
        gold("open");
        return true;
    }
    if (x == "countries") {
        countries("open");
        denominations("close");
        commemorative("close");
        colored("close");
        silver("close");
        gold("close");
        return true;
    }
    if (x == "denominations") {
        countries("close");
        denominations("open");
        commemorative("close");
        colored("close");
        silver("close");
        gold("close");
        return true;
    } if (x == "commemorative") {
        countries("close");
        denominations("close");
        commemorative("open");
        colored("close");
        silver("close");
        gold("close");
        return true;
    } if (x == "colored") {
        countries("close");
        denominations("close");
        commemorative("close");
        colored("open");
        silver("close");
        gold("close");
        return true;
    }
    if (x == "silver") {
        countries("close");
        denominations("close");
        commemorative("close");
        colored("close");
        silver("open");
        gold("close");
        return true;
    }
    if (x == "gold") {
        countries("close");
        denominations("close");
        commemorative("close");
        colored("close");
        silver("close");
        gold("open");
        return true;
    }
}

function loadCountries() {
    var countryList = document.getElementById("countriesList");
    for (country = 0; country <= countryArray.length - 1; country++) {
        var element = document.createElement("button");
        element.className = "country";
        var onClickAttr = document.createAttribute("onclick");
        onClickAttr.value = 'location.href="countrycard.html#' + countryArray[country].replace(/\s/g, '') + '"';
        element.setAttributeNode(onClickAttr);
        element.addEventListener('click', event => event.stopPropagation());
        var textNode = document.createTextNode(countryArray[country]);
        element.appendChild(textNode);
        countryList.appendChild(element);
    }
}

function loadOrdinaryCoins() {
    var denomList = document.getElementById("denomList");
    for (i = 0; i <= coins.length - 1; i++) {
        var element = document.createElement("button");
        element.className = "country";
        var onClickAttr = document.createAttribute("onclick");
        onClickAttr.value = 'location.href="nominalcard.html#' + (coins[i].coin).replace(/\s/g, '') + '"';
        element.setAttributeNode(onClickAttr);
        element.addEventListener('click', event => event.stopPropagation());
        var textNode = document.createTextNode(coins[i].coin);
        element.appendChild(textNode);
        denomList.appendChild(element);
    }
}

function checkOtherCoins() {
    var denomCheckBox = document.getElementById("allDenom");
    var denomList = document.getElementById("denomList");
    denomList.textContent = "";
    if (denomCheckBox.checked == true) {
        var allCoins = sortAllCoins();
        for (i = 0; i <= allCoins.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="nominalcard.html#' + (allCoins[i].coin).replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(allCoins[i].coin);
            element.appendChild(textNode);
            document.getElementById("denomList").appendChild(element);
        }
    } else {
        loadOrdinaryCoins();
    }
}

function sortAllCoins() {
    var allCoins = coins.concat(otherCoins);
    return allCoins.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
}

function loadIssues() {
    var issuesList = document.getElementById("issuesList");
    var commonIssuesCB = document.getElementById("commonIssuesCB");
    var commemoByYearCB = document.getElementById("commemoByYearCB");
    var commemoByCountryCB = document.getElementById("commemoByCountryCB");
    var commonIssuesLabel = document.getElementById("commonIssuesLabel");
    issuesList.textContent = "";
    if (commonIssuesCB.checked == true && commemoByYearCB.checked == true) {
        if (commonIssuesLabel.className == "checkboxContainer displayInline disabled") {
            commonIssuesLabel.className = "checkboxContainer displayInline";
            commonIssuesCB.disabled = false;
        }
        var allIssues = sortAllIssues();
        for (i = 0; i <= allIssues.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="commemorativecard.html#' + (allIssues[i].coin).replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(allIssues[i].coin);
            element.appendChild(textNode);
            issuesList.appendChild(element);
        }
        return true;
    }
    if (commemoByYearCB.checked == true) {
        if (commonIssuesLabel.className == "checkboxContainer displayInline disabled") {
            commonIssuesLabel.className = "checkboxContainer displayInline";
            commonIssuesCB.disabled = false;
        }
        for (i = 0; i <= issues.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="commemorativecard.html#' + (issues[i].coin).replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', () => location.href = 'commemorativecard.html');
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(issues[i].coin);
            element.appendChild(textNode);
            issuesList.appendChild(element);
        }
        return true;
    }
    if (commemoByCountryCB.checked == true) {
        if (commonIssuesLabel.className == "checkboxContainer displayInline") {
            commonIssuesLabel.className += " disabled";
            commonIssuesCB.disabled = true;
        }
        for (i = 0; i <= countryArray.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="commemorativecard.html#' + (countryArray[i]).replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(countryArray[i]);
            element.appendChild(textNode);
            issuesList.appendChild(element);
        }
        return false;
    }
}

function sortAllIssues() {
    var allIssues = issues.concat(commonIssues);
    return allIssues.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
}

function loadColored() {
    var coloredByYearRadio = document.getElementById("coloredByYearRadio");
    var coloredByCountryRadio = document.getElementById("coloredByCountryRadio");
    var coloredList = document.getElementById("coloredList");
    coloredList.textContent = "";
    if (coloredByYearRadio.checked == true) {
        for (i = 0; i <= issues.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="countrycard.html#Colored-' + issues[i].coin + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(issues[i].coin);
            element.appendChild(textNode);
            coloredList.appendChild(element);
        }
    } if (coloredByCountryRadio.checked == true) {
        for (i = 0; i <= countryArray.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="countrycard.html#Colored-' + countryArray[i].replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(countryArray[i]);
            element.appendChild(textNode);
            coloredList.appendChild(element);
        }
    }
}

function loadSilver() {
    var silverByYearRadio = document.getElementById("silverByYearRadio");
    var silverByCountryRadio = document.getElementById("silverByCountryRadio");
    var silverList = document.getElementById("silverList");
    silverList.textContent = "";
    if (silverByYearRadio.checked == true) {
        for (i = 0; i <= issues.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="countrycard.html#Silver-' + issues[i].coin + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(issues[i].coin);
            element.appendChild(textNode);
            silverList.appendChild(element);
        }
    } if (silverByCountryRadio.checked == true) {
        for (i = 0; i <= countryArray.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="countrycard.html#Silver-' + countryArray[i].replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(countryArray[i]);
            element.appendChild(textNode);
            silverList.appendChild(element);
        }
    }
}

function loadGold() {
    var goldByYearRadio = document.getElementById("goldByYearRadio");
    var goldByCountryRadio = document.getElementById("goldByCountryRadio");
    var goldList = document.getElementById("goldList");
    goldList.textContent = "";
    if (goldByYearRadio.checked == true) {
        for (i = 0; i <= issues.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="countrycard.html#Gold-' + issues[i].coin + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(issues[i].coin);
            element.appendChild(textNode);
            goldList.appendChild(element);
        }
    } if (goldByCountryRadio.checked == true) {
        for (i = 0; i <= countryArray.length - 1; i++) {
            var element = document.createElement("button");
            element.className = "country";
            var onClickAttr = document.createAttribute("onclick");
            onClickAttr.value = 'location.href="countrycard.html#Gold-' + countryArray[i].replace(/\s/g, '') + '"';
            element.setAttributeNode(onClickAttr);
            element.addEventListener('click', event => event.stopPropagation());
            var textNode = document.createTextNode(countryArray[i]);
            element.appendChild(textNode);
            goldList.appendChild(element);
        }
    }
}

/*Close top navigation when clicked outside opened top nav on mobile*/
window.onclick = function (event) {
    if (event.target === document.getElementsByClassName("navLinksOnMobile")[0]) {
        showNavLinks();
    }
}
