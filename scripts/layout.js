window.onload = function() {
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
                <li><a href="#" onclick="openAll();return false;">All</a></li>
                <li><a href="#" onclick="openCountries();return false;">Countries</a></li>
                <li><a href="#" onclick="openDenominations();return false;">Denominations</a></li>
                <li><a href="#" onclick="openCommemorative();return false;">Commemorative</a></li>
                <li><a href="#colored">Colored</a></li>
                <li><a href="#silver">Silver</a></li>
                <li><a href="#gold">Gold</a></li>
            </ul>
        </div>`;

    document.getElementById("footer").innerHTML = 
    `Crispyeuro 2021`;

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

/*function pcShowSideNav() {
    var pcSideNavBtnAction = document.getElementById("pcSideNavBtnAction");
    var pcSideNavAction = document.getElementById("pcSideNavLinksContainer");
    var pcMenu = document.getElementById("menu");
    var pcContent = document.getElementById("content");
    if (pcSideNavAction.className == "sideNav") {
        pcSideNavAction.className = "pcSideNavClosed";
        pcSideNavBtnAction.className = "pcSideNavCloseBtn";
        pcMenu.className = "menu menuSmallWidth";
        pcContent.className = "content contentSmallMargin";
    }
    else {
        pcSideNavAction.className = "sideNav";
        pcSideNavBtnAction.className = "pcSideNavBtn";
        pcMenu.className = "menu menuWidth";
        pcContent.className = "content contentMargin";
    }
}*/
/*
window.onresize = function() {
    if (window.innerWidth > 768) {
        document.getElementsByClassName("navLink")[0].style.display = "block";
    } else {
        document.getElementsByClassName("navLinkMobile")[0].style.display = "none";
    }
}
*/

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

function checkHash() {
    const x = window.location.hash.substr(1);
    if (x == "all") {
        countries("open");
        denominations("open");
        commemorative("open");
        return true;
    }
    if (x == "countries") {
        countries("open");
        denominations("close");
        commemorative("close");
        return true;
    }
    if (x == "denominations") {
        countries("close");
        denominations("open");
        commemorative("close");
        return true;
    } if (x == "commemorative") {
        countries("close");
        denominations("close");
        commemorative("open");
        return true;
    }
}
