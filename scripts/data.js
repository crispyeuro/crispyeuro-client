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
};


/*Some test contacts and test messages*/

var testContacts = [
    { id: 1, username: "user4884", online: true },
    { id: 2, username: "user23843", online: false },
    { id: 3, username: "user455", online: true },
    { id: 4, username: "user972", online: false }
];

var user4884Messages = [
    { order: 1, message: "Hello!" },
    { order: 2, message: "Some message." },
    { order: 3, message: "Some last message." }
];

var user455Messages = [];

var user23842Messages = [
    { order: 1, message: "Hi!" },
    { order: 2, message: "Another last message." }
];

var user972Messages = [];


var testMessages = [
    { id: 1, userMessages: user4884Messages },
    { id: 2, userMessages: user23842Messages },
    { id: 3, userMessages: user455Messages },
    { id: 4, userMessages: user972Messages }
]


/*Missing coins */

var showMissingCoins = false;


/*User coins to swap*/

var coinsToSwap = [
    { order: 6, id: 448, type: "Ordinary", coin: "50 cent 2016 Slovenia", swapAvailability: true },
    { order: 5, id: 123, type: "Commemorative", coin: "2 euro 2002 Greece", swapAvailability: true },
    { order: 4, id: 844, type: "Ordinary", coin: "20 cent 2007 Finland", swapAvailability: true },
    { order: 3, id: 685, type: "Commemorative", coin: "2 euro 2014 Latvia", swapAvailability: true },
    { order: 2, id: 158, type: "Ordinary", coin: "1 euro 2002 France", swapAvailability: true },
    { order: 1, id: 125, type: "Ordinary", coin: "1 cent 2015 Andorra", swapAvailability: true },
]
