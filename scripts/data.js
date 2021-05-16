'use strict';

/*Contries' names and flag images*/
const countryArray = [
    {
        name: "Andorra",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
        title: "Flag of Andorra. [https://commons.wikimedia.org/wiki/File:Flag_of_Andorra.svg], HansenBCN, Public domain, via Wikimedia Commons"
    },
    {
        name: "Austria",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
        title: "Flag of Austria. [https://commons.wikimedia.org/wiki/File:Flag_of_Austria.svg], Bundesministerium für Landesverteidigung, Public domain, via Wikimedia Commons"
    },
    {
        name: "Belgium",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
        title: "Flag of Belgium. [https://commons.wikimedia.org/wiki/File:Flag_of_Belgium_(civil).svg]"
    },
    {
        name: "Cyprus",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
        title: "Flag of Cyprus. [https://commons.wikimedia.org/wiki/File:Flag_of_Cyprus.svg], User:Vzb83, Public domain, via Wikimedia Commons"
    },
    {
        name: "Estonia",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
        title: "Flag. of Estonia. Originally drawn by User:SKopp. Blue colour changed by User:PeepP to match the image at [https://commons.wikimedia.org/wiki/File:Flag_of_Estonia.svg]., Public domain, via Wikimedia Commons"
    },
    {
        name: "Finland",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
        title: "Flag of Finland. [https://commons.wikimedia.org/wiki/File:Flag_of_Finland.svg], SVG drawn by Sebastian Koppehel, Public domain, via Wikimedia Commons"
    },
    {
        name: "France",
        flagImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        title: "Flag of France. [https://en.wikipedia.org/wiki/File:Flag_of_France.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Germany",
        flagImage: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png",
        title: "Flag of Germany. [https://en.wikipedia.org/wiki/File:Flag_of_Germany.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Greece",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/320px-Flag_of_Greece.svg.png",
        title: " Flag of Greece. [https://en.wikipedia.org/wiki/File:Flag_of_Greece.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Ireland",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
        title: "Flag of Ireland. [https://en.wikipedia.org/wiki/File:Flag_of_Ireland.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Italy",
        flagImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png",
        title: "Flag of Italy. [https://en.wikipedia.org/wiki/File:Flag_of_Italy.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Latvia",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/640px-Flag_of_Latvia.svg.png",
        title: "Flag of Latvia. [https://en.wikipedia.org/wiki/File:Flag_of_Latvia.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Lithuania",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/800px-Flag_of_Lithuania.svg.png",
        title: "Flag of Lithunia. [https://en.wikipedia.org/wiki/File:Flag_of_Lithuania.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Luxembourg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/800px-Flag_of_Luxembourg.svg.png",
        title: "Flag of luxembourg. [https://en.wikipedia.org/wiki/File:Flag_of_Luxembourg.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Malta",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/800px-Flag_of_Malta.svg.png",
        title: "Flag of Malta. [https://en.wikipedia.org/wiki/File:Flag_of_Malta.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Monaco",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/600px-Flag_of_Monaco.svg.png",
        title: "Flag of Monaco. [https://en.wikipedia.org/wiki/File:Flag_of_Monaco.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Netherlands",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/640px-Flag_of_the_Netherlands.svg.png",
        title: " Flag of Netherlands. [https://en.wikipedia.org/wiki/File:Flag_of_the_Netherlands.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Portugal",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
        title: "Flag of Portugal. [https://en.wikipedia.org/wiki/File:Flag_of_Portugal.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "San-Marino",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/640px-Flag_of_San_Marino.svg.png",
        title: "Flag of San Marino. [https://en.wikipedia.org/wiki/File:Flag_of_San_Marino.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Slovakia",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/320px-Flag_of_Slovakia.svg.png",
        title: "Flag of Slovakia. [https://en.wikipedia.org/wiki/File:Flag_of_Slovakia.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Slovenia",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/640px-Flag_of_Slovenia.svg.png",
        title: "Flag of Slovenia. [https://en.wikipedia.org/wiki/File:Flag_of_Slovenia.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Spain",
        flagImage: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        title: "Flag of Spain. [https://en.wikipedia.org/wiki/File:Flag_of_Spain.svg], Public domain, via Wikimedia Commons"
    },
    {
        name: "Vatican",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
        title: "Flag of Vatican. [https://en.wikipedia.org/wiki/File:Flag_of_the_Vatican_City.svg], Public domain, via Wikimedia Commons"
    }
];
