var countryArray = [
    { name: "Andorra", flagImage: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg", title: "Flag of Andorra. [https://commons.wikimedia.org/wiki/File:Flag_of_Andorra.svg], HansenBCN, Public domain, via Wikimedia Commons" }, 
    { name: "Austria",  flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg", title: "Flag of Austria. [https://commons.wikimedia.org/wiki/File:Flag_of_Austria.svg], Bundesministerium für Landesverteidigung, Public domain, via Wikimedia Commons" }, 
    { name: "Belgium",  flagImage: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg", title: "Flag of Belgium. [https://commons.wikimedia.org/wiki/File:Flag_of_Belgium_(civil).svg]" }, 
    { name: "Cyprus", flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg", title: "Flag of Cyprus. [https://commons.wikimedia.org/wiki/File:Flag_of_Cyprus.svg], User:Vzb83, Public domain, via Wikimedia Commons" }, 
    { name: "Estonia", flagImage: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg", title: "Flag. of Estonia. Originally drawn by User:SKopp. Blue colour changed by User:PeepP to match the image at [https://commons.wikimedia.org/wiki/File:Flag_of_Estonia.svg]., Public domain, via Wikimedia Commons" }, 
    { name: "Finland", flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg", title: "Flag of Finland. [https://commons.wikimedia.org/wiki/File:Flag_of_Finland.svg], SVG drawn by Sebastian Koppehel, Public domain, via Wikimedia Commons" }, 
    { name: "France", flagImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", title: "Flag of France. [https://en.wikipedia.org/wiki/File:Flag_of_France.svg], Public domain, via Wikimedia Commons" },
    { name: "Germany", flagImage: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png", title: "Flag of Germany. [https://en.wikipedia.org/wiki/File:Flag_of_Germany.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Greece", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/320px-Flag_of_Greece.svg.png", title: " Flag of Greece. [https://en.wikipedia.org/wiki/File:Flag_of_Greece.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Ireland", flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg", title: "Flag of Ireland. [https://en.wikipedia.org/wiki/File:Flag_of_Ireland.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Italy", flagImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png", title: "Flag of Italy. [https://en.wikipedia.org/wiki/File:Flag_of_Italy.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Latvia", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/640px-Flag_of_Latvia.svg.png", title: "Flag of Latvia. [https://en.wikipedia.org/wiki/File:Flag_of_Latvia.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Lithuania", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/800px-Flag_of_Lithuania.svg.png", title: "Flag of Lithunia. [https://en.wikipedia.org/wiki/File:Flag_of_Lithuania.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Luxembourg", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/800px-Flag_of_Luxembourg.svg.png", title: "Flag of luxembourg. [https://en.wikipedia.org/wiki/File:Flag_of_Luxembourg.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Malta", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/800px-Flag_of_Malta.svg.png", title: "Flag of Malta. [https://en.wikipedia.org/wiki/File:Flag_of_Malta.svg], Public domain, via Wikimedia Commons" },
    { name: "Monaco", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/600px-Flag_of_Monaco.svg.png", title: "Flag of Monaco. [https://en.wikipedia.org/wiki/File:Flag_of_Monaco.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Netherlands", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/640px-Flag_of_the_Netherlands.svg.png", title: " Flag of Netherlands. [https://en.wikipedia.org/wiki/File:Flag_of_the_Netherlands.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Portugal", flagImage: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", title: "Flag of Portugal. [https://en.wikipedia.org/wiki/File:Flag_of_Portugal.svg], Public domain, via Wikimedia Commons" }, 
    { name: "San Marino", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/640px-Flag_of_San_Marino.svg.png", title: "Flag of San Marino. [https://en.wikipedia.org/wiki/File:Flag_of_San_Marino.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Slovakia", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/320px-Flag_of_Slovakia.svg.png", title: "Flag of Slovakia. [https://en.wikipedia.org/wiki/File:Flag_of_Slovakia.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Slovenia", flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/640px-Flag_of_Slovenia.svg.png", title: "Flag of Slovenia. [https://en.wikipedia.org/wiki/File:Flag_of_Slovenia.svg], Public domain, via Wikimedia Commons" }, 
    { name: "Spain", flagImage: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg", title: "Flag of Spain. [https://en.wikipedia.org/wiki/File:Flag_of_Spain.svg], Public domain, via Wikimedia Commons" }, 
    {name: "Vatican", flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg", title: "Flag of Vatican. [https://en.wikipedia.org/wiki/File:Flag_of_the_Vatican_City.svg], Public domain, via Wikimedia Commons" }
];

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
