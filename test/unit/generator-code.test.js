"use strict";
const { assert, expect } = require("chai");
const { GeneratePass, RandomNumber, UseList, SelectItem, Shuffle } = require("../../src/components/generator-code");
const actors = require("../../src/components/resources/actors.json");
const movies = require("../../src/components/resources/movies.json");
const colours = require("../../src/components/resources/colours.json");
const animals = require("../../src/components/resources/animals.json");

// TODO: https://www.pluralsight.com/guides/unit-test-react-component-mocha

describe("Passphrase Generator", () => {

    const tests = [
        { inputList1: "actors", inputList2: "movies", inputList3: "noThirdList", inputNum: "Y", inputSym: "N" },
        { inputList1: "actors", inputList2: "movies", inputList3: "noThirdList", inputNum: "N", inputSym: "Y" },
        { inputList1: "actors", inputList2: "movies", inputList3: "noThirdList", inputNum: "Y", inputSym: "Y" },
        { inputList1: ["cat", "dog", "hippo", "penguin", "lion", "tiger", "seagull"], inputList2: ["red", "yellow", "green", "blue", "purple"], inputList3: "noThirdList", inputNum: "Y", inputSym: "Y" },
        { inputList1: "actors", inputList2: "movies", inputList3: "noThirdList", inputNum: "Y", inputSym: "Y" },
        { inputList1: "actors", inputList2: "movies", inputList3: "noThirdList", inputNum: "Y", inputSym: "Y" },
        { inputList1: "colours", inputList2: "movies", inputList3: "noThirdList", inputNum: "Y", inputSym: "Y" },
        { inputList1: "animals", inputList2: "movies", inputList3: "noThirdList", inputNum: "Y", inputSym: "Y" },
        { inputList1: "actors", inputList2: "movies", inputList3: "colours", inputNum: "Y", inputSym: "Y" }
    ]

    // test it returns a String
    tests.forEach(({ inputList1, inputList2, inputList3, inputNum, inputSym }) => {
        const result = GeneratePass(inputList1, inputList2, inputList3, inputNum, inputSym);
        it(`DATATYPE: Should return a String. RESULT: ${result}`, () => {
            assert.isString(result);
        })
    });

    // test it should contain a number
    tests.forEach(({ inputList1, inputList2, inputList3, inputSym }) => {
        const result = GeneratePass(inputList1, inputList2, inputList3, "Y", inputSym);
        it(`DATATYPE: Should include a number. RESULT: ${result}`, () => {
            expect(result).to.match(/[0-9]/gi);
        })
    });

    // test it should not contain a number
    tests.forEach(({ inputList1, inputList2, inputList3, inputSym }) => {
        const result = GeneratePass(inputList1, inputList2, inputList3, "N", inputSym);
        it(`DATATYPE: Should NOT include a number. RESULT: ${result}`, () => {
            expect(result).to.not.match(/[0-9]/gi);
        })
    });

    // test it does contain a symbol
    tests.forEach(({ inputList1, inputList2, inputList3, inputNum }) => {
        const result = GeneratePass(inputList1, inputList2, inputList3, inputNum, "Y");
        it(`DATATYPE: Should include a symbol. RESULT:${result}`, () => {
            expect(result).to.match(/[^a-z0-9]/gi);
        })
    });

    // test it does not contain a symbol
    tests.forEach(({ inputList1, inputList2, inputList3, inputNum }) => {
        const result = GeneratePass(inputList1, inputList2, inputList3, inputNum, "N");
        it(`DATATYPE: Should NOT include a symbol. RESULT: ${result}`, () => {
            expect(result).to.not.match(/[^a-z0-9]/gi);
        })
    });
});

describe("RandomNumber", () => {
    const tests = [
        { inputMin: 0, inputMax: 1 },
        { inputMin: 0, inputMax: 10 },
        { inputMin: 0, inputMax: 100 },
        { inputMin: 0, inputMax: 1000 },
        { inputMin: 0, inputMax: 9 },
        { inputMin: 0, inputMax: 99 },
        { inputMin: 0, inputMax: 999 },
        { inputMin: 0, inputMax: 9999 },
        { inputMin: 5, inputMax: 10 },
        { inputMin: 100, inputMax: 100 },
        { inputMin: 0, inputMax: 1000 }
    ]

    // test it returns a number
    tests.forEach(({ inputMin, inputMax }) => {
        it("DATATYPE: Should return a Number", () => {
            assert.isNumber(RandomNumber(inputMin, inputMax));
        })
    });

    // test returned number is within the specified range
    tests.forEach(({ inputMin, inputMax }) => {
        const result = RandomNumber(inputMin, inputMax);
        it(`Result: ${result} should be between ${inputMin} and ${inputMax}`, () => {
            expect(result).to.be.greaterThanOrEqual(inputMin).and.to.be.lessThanOrEqual(inputMax);
        })
    });
});

describe("UseList", () => {
    const tests = [
        { input: "actors", expect: actors },
        { input: "movies", expect: movies },
        { input: ["Ford", "Volkswagen", "SEAT"], expect: ["Ford", "Volkswagen", "SEAT"] },
        { input: "colours", expect: colours },
        { input: "animals", expect: animals }
    ]

    // test it returns an array
    tests.forEach(({ input }) => {
        it("DATATYPE: Should return an Array", () => {
            assert.isArray(UseList(input));
        })
    });

    //  test it returns correct array
    tests.forEach(({ input, expect }) => {
        it(`Should return ${input} Array`, () => {
            assert.equal(UseList(input).toString(), expect);
        })
    });
});

describe("SelectItem", () => {
    const tests = [
        { inputList: ["test word"], inputElementIndex: 0, inputUpper: 1 },
        { inputList: actors, inputElementIndex: 1, inputUpper: 1 },
        { inputList: movies, inputElementIndex: 2, inputUpper: 1 },
        { inputList: ["Ford", "Volkswagen", "SEAT"], inputElementIndex: 1, inputUpper: 1 },
        { inputList: colours, inputElementIndex: 1, inputUpper: 1 },
        { inputList: animals, inputElementIndex: 1, inputUpper: 1 }
    ]

    // test it returns a string
    tests.forEach(({ inputList, inputElementIndex, inputUpper }) => {
        it("DATATYPE: Should return a String", () => {
            assert.isString(SelectItem(inputList, inputElementIndex, inputUpper));
        })
    });

    // test that returned word is included in inputList
    tests.forEach(({ inputList }) => {
        // Map inputList to an array, making each element UpperCase
        const inputListUpper = inputList.map(item => item.toUpperCase());
        const result = SelectItem(inputList, 1, 0).toUpperCase();
        it(`${result} should be included within Array List`, () => {
            expect(inputListUpper).to.include(result);
        })
    });

    // test that the returned word from list is uppercase - index 0
    tests.forEach(({ inputList }) => {
        const elementIndex = 0;
        const upper = 1;
        const result = SelectItem(inputList, elementIndex, upper);
        it(`${result} should be UPPERCASE - elementIndex: ${elementIndex}, upper: ${upper}`, () => {
            assert.equal(result, result.toUpperCase());
        })
    });

    // test that the returned word from list is uppercase - index 2
    tests.forEach(({ inputList }) => {
        const elementIndex = 2;
        const upper = 1;
        const result = SelectItem(inputList, elementIndex, upper);
        it(`${result} should be UPPERCASE - elementIndex: ${elementIndex}, upper: ${upper}`, () => {
            assert.equal(result, result.toUpperCase());
        })
    });

    // test that the returned word from list is uppercase - index 1
    tests.forEach(({ inputList }) => {
        const elementIndex = 1;
        const upper = 2;
        const result = SelectItem(inputList, elementIndex, upper);
        it(`${result} should be UPPERCASE - elementIndex: ${elementIndex}, upper: ${upper}`, () => {
            assert.equal(result, result.toUpperCase());
        })
    });

    // test that the returned word from list is lowercase - index 0
    tests.forEach(({ inputList }) => {
        const elementIndex = 0;
        const upper = 2;
        const result = SelectItem(inputList, elementIndex, upper);
        it(`${result} should be lowercase - elementIndex: ${elementIndex}, upper: ${upper}`, () => {
            assert.equal(result, result.toLowerCase());
        })
    });

    // test that the returned word from list is lowercase - index 2
    tests.forEach(({ inputList }) => {
        const elementIndex = 2;
        const upper = 2;
        const result = SelectItem(inputList, elementIndex, upper);
        it(`${result} should be lowercase - elementIndex: ${elementIndex}, upper: ${upper}`, () => {
            assert.equal(result, result.toLowerCase());
        })
    });

    // test that the returned word from list is lowercase - index 1
    tests.forEach(({ inputList }) => {
        const elementIndex = 1;
        const upper = 1;
        const result = SelectItem(inputList, elementIndex, upper);
        it(`${result} should be lowercase - elementIndex: ${elementIndex}, upper: ${upper}`, () => {
            assert.equal(result, result.toLowerCase());
        })
    });
})

describe("Shuffle Test", () => {
    const tests = [
        { inputList: ["Ford", "Volkswagen", "SEAT"] },
        { inputList: ["list1", "list2", "list3"] },
        { inputList: ["A", "B", "C", "D", "E", "F", "G"] },
    ]

    // shuffles list 1000 times and checks that original isn't returned more than 50% of the time
    tests.forEach(({ inputList }) => {
        const original = inputList.toString();
        let matchOriginal = 0;
        for (let index = 0; index < 1000; index++) {
            const result = Shuffle(inputList).toString();
            // console.log(`input: ${original} shuffle: ${result}`);
            if (result === original) {
                matchOriginal++;
            }
        }
        
        it(`should not return the same order more than 50% of the time if run 1000 times. matched order: ${matchOriginal}`, () => {
            expect(matchOriginal).to.not.greaterThan(500);
        })
    });
})