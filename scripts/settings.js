function settingsMenuBtnClicked(id) {
    if (id == "userSettings") {
        var userSettings = document.getElementById("userSettingsTab");
        if (userSettings.className == "userSettingsTab closed") {
            userSettings.className = "userSettingsTab opened";
            document.getElementById(id).style.color = "rgba(52, 123, 152, 1)";

            document.getElementById("collectionSettingsTab").className = "collectionSettingsTab closed";
            document.getElementById("collectionSettings").style.color = "rgb(46, 56, 77, 1)";
        }
        return true;
    }
    if (id == "collectionSettings") {
        var collectionSettings = document.getElementById("collectionSettingsTab");
        if (collectionSettings.className == "collectionSettingsTab closed") {
            collectionSettings.className = "collectionSettingsTab opened";
            document.getElementById(id).style.color = "rgba(52, 123, 152, 1)";

            document.getElementById("userSettingsTab").className = "userSettingsTab closed";
            document.getElementById("userSettings").style.color = "rgb(46, 56, 77, 1)";
        }
        return true;
    }
}

function radioVeryAdvancedClicked() {
    var radioLevelVeryAdvanced = document.getElementById("levelVeryAdvanced");
    if (radioLevelVeryAdvanced.checked == true) {
        document.getElementById("setupGermanCoins").checked = true;
    }
}
