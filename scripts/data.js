var countryArray = ["Andorra", "Austria", "Belgium", "Cyprus", "Estonia", "Finland", "France", 
"Germany", "Greece", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", 
"Monaco", "Netherlands", "Portugal", "San Marino", "Slovakia", "Slovenia", "Spain", "Vatican"];

var coinsArray = ["1 cent", "2 cent", "5 cent", "10 cent", "20 cent", "50 cent", "1 euro", "2 euro"];

var otherCoinsArray = ["1.5 euro", "2.5 euro", "3 euro", "5 euro", "6 euro", "7.5 euro", "8 euro", 
"10 euro", "20 euro", "25 euro", "50 euro", "100 euro"];

var issuesArray = years();

var commonIssuesArray = ["2007 TOR", "2009 EMU", "2012 10YE", "2015 30YF"];

function years() {
    var issues = [];
    for (year = 1999; year <= 2021; year++) {
        issues.push(year);
    }
    return issues;
}

