var countryArray = ["Andorra", "Austria", "Belgium", "Cyprus", "Estonia", "Finland", "France",
    "Germany", "Greece", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
    "Monaco", "Netherlands", "Portugal", "San Marino", "Slovakia", "Slovenia", "Spain", "Vatican"];

var coins = [
    { coin: "1 cent", value: 0.01, ordinary: true },
    { coin: "2 cent", value: 0.02, ordinany: true },
    { coin: "5 cent", value: 0.05, ordinary: true },
    { coin: "10 cent", value: 0.1, ordinary: true },
    { coin: "20 cent", value: 0.2, ordinany: true },
    { coin: "50 cent", value: 0.5, ordinary: true },
    { coin: "1 euro", value: 1, ordinary: true },
    { coin: "2 euro", value: 2, ordinary: true }
];

var otherCoins = [
    { coin: "1.5 euro", value: 1.5, ordinary: false },
    { coin: "2.5 euro", value: 2.5, ordinary: false },
    { coin: "3 euro", value: 3, ordinary: false },
    { coin: "5 euro", value: 5, ordinary: false },
    { coin: "6 euro", value: 5, ordinary: false },
    { coin: "7.5 euro", value: 7.5, ordinary: false },
    { coin: "8 euro", value: 8, ordinary: false },
    { coin: "10 euro", value: 10, ordinany: false },
    { coin: "20 euro", value: 20, ordinary: false },
    { coin: "25 euro", value: 25, ordinary: false },
    { coin: "50 euro", value: 50, ordinary: false },
    { coin: "100 euro", value: 100, ordinary: false }
];

var issues = years();

var commonIssuesArray = ["2007 TOR", "2009 EMU", "2012 10YE", "2015 30YF"];

var commonIssues = [
    { coin: "2007 TOR", year: 2007, common: true },
    { coin: "2009 EMU", year: 2009, common: true },
    { coin: "2012 10YE", year: 2012, common: true },
    { coin: "2015 30YF", year: 2015, common: true }
];

function years() {
    var issues = [];
    for (i = 1999; i <= 2021; i++) {
        issues.push({ coin: String(i), year: i, common: false });
    }
    return issues;
}
