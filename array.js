const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

let citiesArray = gotCitiesCSV.split(",");
let kata1 = document.createElement("div");
kata1.textContent = JSON.stringify(citiesArray);
document.body.insertAdjacentElement("beforeend", kata1);

let words = bestThing.split(" ");
document.write(JSON.stringify(words));

let semiColons = citiesArray.join(";");
document.write(JSON.stringify(semiColons) + "<br />");

let k4 = lotrCitiesArray.join(",");
document.write(JSON.stringify(k4) + "<br />");

let k5 = lotrCitiesArray.slice(lotrCitiesArray.length - 5);
document.writeln(JSON.stringify(k5) + "<br />");

let k6 = lotrCitiesArray.splice(2, 1);
document.writeln(JSON.stringify(lotrCitiesArray) + "<br />");

let k7 = bestThing.slice(23, 38);
document.writeln(JSON.stringify(k7) + "<br />");

let k8 = bestThing.indexOf("only");
document.write(JSON.stringify(k8) + "<br />");

let k9 = citiesArray;
var newArray = [];

for (var i = 0; i < k9.length; i++) {
    if (k9[i].includes("aa") || k9[i].includes("ee") || k9[i].includes("ii") || k9[i].includes("oo") || k9[i].includes("uu")) {

        newArray.push(k9[i]);
    }
}
document.write(JSON.stringify(newArray) + "<br />");

let k10 = (lotrCitiesArray.sort(function (a, b) {
    return a.length - b.length;
}));
document.write(JSON.stringify(k10) + "<br />");