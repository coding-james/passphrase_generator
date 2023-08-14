const actors = require("./resources/actors.json");
const movies = require("./resources/movies.json");
const symbols = require("./resources/symbols.json");
const colours = require("./resources/colours.json");
const animals = require("./resources/animals.json");

function GeneratePass(list1, list2, list3, includeNum, includeSym) {
    let digitArr = [10, 100, 1000];
    let upper = RandomNumber(1, 2.9);
    let elementsOrder = Shuffle(["list1", "list2", "list3"]);

    list1 = UseList(list1);
    list2 = UseList(list2);
    list3 = UseList(list3);

    // Build Passphrase
    if (list2 === "noSecondList") {
        elementsOrder.splice(elementsOrder.indexOf("list2"), 1);
    }

    if (list3 === "noThirdList") {
        elementsOrder.splice(elementsOrder.indexOf("list3"), 1);
    }

    // get word from list 1
    let word1 = SelectItem(list1, elementsOrder.indexOf("list1"), upper);
    elementsOrder[elementsOrder.indexOf("list1")] = word1;

    // get word from list 2
    if (list2 !== "noSecondList") {
        let word2 = SelectItem(list2, elementsOrder.indexOf("list2"), upper);;
        elementsOrder[elementsOrder.indexOf("list2")] = word2;
    }

    // get word from list 3
    if (list3 !== "noThirdList") {
        let word3 = SelectItem(list3, elementsOrder.indexOf("list3"), upper);
        elementsOrder[elementsOrder.indexOf("list3")] = word3;
    }

    // check if number is to be included, get a random number to determine number of digits, get random number based on the required digits then replace array element
    if (includeNum === "Y") {
        let maxNo = (10 * digitArr[RandomNumber(0, digitArr.length)]) - 1;
        let randomNo = RandomNumber(1, maxNo);
        let insertNum = RandomNumber(1, elementsOrder.length);
        elementsOrder.splice(insertNum, 0, randomNo);
    }

    // check if symbol is to be included, random no based on length of list then replace array element in position
    if (includeSym === "Y") {
        let randSym = SelectItem(symbols);
        let insertNum = RandomNumber(1, elementsOrder.length);
        elementsOrder.splice(insertNum, 0, randSym);
    }

    // console.log(`Debug: ${elementsOrder.toString().replace(/,/g, "")}\n`);
    return elementsOrder.toString().replace(/[,\s]/g, "");
}

// Random Number Generator
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Fisher–Yates Shuffle - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array and https://bost.ocks.org/mike/shuffle/
function Shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

function UseList(list) {
    switch (list) {
        case "actors":
            list = actors;
            break;
        case "movies":
            list = movies;
            break;
        case "colours":
            list = colours;
            break;
        case "animals":
            list = animals;
            break;
        default:
            break;
    }

    return list;
};

// Select random word from selected list
function SelectItem(list, elementIndex, upper) {
    if (((elementIndex === 0 || elementIndex === 2) && upper === 1) || (elementIndex === 1 && upper === 2)) {
        return list[RandomNumber(0, list.length)].toUpperCase();
    } else {
        return list[RandomNumber(0, list.length)].toLowerCase();
    }
};

// module.exports = { GeneratePass, RandomNumber, Shuffle, UseList, SelectItem };
export default GeneratePass;