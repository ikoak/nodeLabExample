/**
 * Created by koakx001 on 1/23/15.
 */

var letterToNum = function(letter) {
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

var calculateGPA = function(grade1, credits1, grade2, credits2, grade3, credits3){
    var totalCredits = Number(credits1) + Number(credits2) + Number(credits3);
    return ((letterToNum(grade1) * credits1) + (letterToNum(grade2) * credits2) + (letterToNum(grade3) * credits3)) / totalCredits;
}