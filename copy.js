//arrays for characters 
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//converts lowercase array to uppercase array 
var upperChars = lowerChars.map(function (toUp) { return toUp.toUpperCase() });

var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var generatePassword = function () {
    //empty array for building list of allowed characters 
    var allowChar = []

    //output of random characters taken from allowChar after it is filled
    var outputPass = ''

    //where random characters are stored when chosen
    var randChar = ''

    //asks user how long they want their password to be and verifies input meets acceptance criteria
    var length = window.prompt("How long should your password be? Enter a number between 0 and 128");
    //converts input to integer 
    length = parseInt(length);
    //checks that the input is a number and that it is between 0 and 128
    if (typeof length !== "number" || length <= 0 || length > 128) {
        window.confirm("Please input a number between 0 - 128!");
        return;
    };

    var allowLow = window.confirm("Would you like your password to contain lowercase letters?");

    var allowUp = window.confirm("Would you like your password to contain uppercase letters?");

    var allowSpecial = window.confirm("Would you like your password to contain special characters?");

    var allowNum = window.confirm("Would you like your password to contain numbers?");


    // if confirm returns true then it will allow selected properties to be input in to the allowChar array 
    if (allowLow) {
        allowChar = allowChar.concat(lowerChars);
    };

    if (allowUp) {
        allowChar = allowChar.concat(upperChars);
    };

    if (allowSpecial) {
        allowChar = allowChar.concat(specialChars);
    };

    if (allowNum) {
        allowChar = allowChar.concat(numChar);
    };

    //while output for generated password is not equal to desired length 
    while (outputPass.length !== length) {
        //randomly selects characters from allowChar array
        randChar = allowChar[Math.floor(Math.random() * allowChar.length)];
        //then adds randomly selected character to outputPass (generated password)
        outputPass = outputPass + randChar;

    }
    //returns generated password
    return outputPass;
}