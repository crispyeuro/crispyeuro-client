window.onload = function() {
    document.getElementById("header").innerHTML = 
        `<div class="logo"><a href="index.html">Crispyeuro</a></div>
        <nav>
            <ul>
                <li><a href="#messages">Messages</a></li>
                <li><a href="#swap">Swap</a></li>
                <li><a href="settings.html">Settings</a></li>
                <li><a href="login.html">Log out</a></li>
            </ul>
        </nav>`;

    document.getElementsByClassName("menu")[0].innerHTML = 
        `<div class="sideNav">
            Menu <br><br>

            I have 40 coins<br>
            <div class="myCoinsAmountMeter">
                <div class="myCoinsAmountProgress">40%</div>
            </div><br>

            <ul>
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
