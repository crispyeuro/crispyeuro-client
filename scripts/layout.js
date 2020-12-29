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
        `<div class="sideNav">
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
                <li><a href="#countries">All</a></li>
                <li><a href="#countries">Countries</a></li>
                <li><a href="#denominations">Denominations</a></li>
                <li><a href="#commemorative">Commemorative</a></li>
                <li><a href="#colored">Colored</a></li>
                <li><a href="#silver">Silver</a></li>
                <li><a href="#gold">Gold</a></li>
            </ul>
        </div>`;

    document.getElementById("footer").innerHTML = 
    `Crispyeuro 2020`;
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
/*
window.onresize = function() {
    if (window.innerWidth > 768) {
        document.getElementsByClassName("navLink")[0].style.display = "block";
    } else {
        document.getElementsByClassName("navLinkMobile")[0].style.display = "none";
    }
}
*/
