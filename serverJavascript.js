// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.addFive = function(number){
    return number + 5;
}

// Tested in serverJavascriptINDEV.spec.js against serverJavascriptINDEV.js
// We copied and pasted the code here.
var letterToNum = function(letter){
    letter = letter.toUpperCase();
    switch(letter) {
        case "A":
            return 4.0;
        case "B":
            return 3.0;
        case "C":
            return 2.0;
        case "D":
            return 1.0;
        default:
            return 0.0;
    }
}

exports.calculateGPA = function(grade1, credits1, grade2, credits2, grade3, credits3){
    var totalCredits = credits1 + credits2 + credits3;
    return ((letterToNum(grade1) * credits1) + (letterToNum(grade2) * credits2) + (letterToNum(grade3) * credits3)) / totalCredits;
}


