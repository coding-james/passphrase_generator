function readableNumber(number) {
    let numString = number.toString();
    let numArray = [];

    for (let i = 0; i < numString.length; i++) {
        let num = parseInt(numString[i]);

        switch (parseInt(num)) {
            case 1:
                numArray.push("one");
                break;
            case 2:
                numArray.push("two");
                break;
            case 3:
                numArray.push("three");
                break;
            case 4:
                numArray.push("four");
                break;
            case 5:
                numArray.push("five");
                break;
            case 6:
                numArray.push("six");
                break;
            case 7:
                numArray.push("seven");
                break;
            case 8:
                numArray.push("eight");
                break;
            case 9:
                numArray.push("nine");
                break;
            default:
                numArray.push("zero");
                break;
        }
    }

    // right to left
    // depending on length of array, insert relevant words "and" "hundred" "thousand" - replace zero? one zero zero = one hundred
    // if next to a zero replace = e.g. one zero = ten teen
    // four digits (e.g. 1984) could be Nineteen Eighty Four or One Thousand Nine Hundred and Nighty Four
};