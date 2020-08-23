// Variable for password criteria
// Lower case variables
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Uppper Case Variables 
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Numbers variable 
var numberOptions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

// Special characters variable
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "/",
  "?"
];

// Ask User for password criteria and give confirmation
function askPasswordCriteria() {
  var length = parseInt (
    prompt("Enter the amount of characters you would like in your password.")
  );

  if (length >= 8 && length < 128) {
    var containLowerCase = confirm("Would you like to have lower case letters in your password?");
    if (containLowerCase){
      window.alert ("Password WILL contain lower case letters.");
    } else window.alert ("Password will NOT contain lower case letters.");
    var containUpperCase = confirm("Would you like to have upper case letters in your password?");
    if (containUpperCase){
      window.alert ("Password WILL contain upper case letters.");
    } else window.alert ("Password will NOT contain upper case letters.");
    var containNumberOptions = confirm("Would you like to have numbers in your password?");
    if (containNumberOptions){
      window.alert ("Password WILL contain numbers.");
    } else window.alert ("Password will NOT contain numbers.");
    var containSpecialCharacters = confirm("Would you like to have special characters in your password?");
    if (containSpecialCharacters){
      window.alert ("Password WILL contain special characters.");
    } else window.alert ("Password will NOT contain special characters.");
  } else {
    alert("Please choose a character amount between 1 and 128!");
  }
  var passwordCriteria = {
    length: length,
    containLowerCase: containLowerCase,
    containUpperCase: containUpperCase,
    containNumberOptions: containNumberOptions,
    containSpecialCharacters: containSpecialCharacters
  };
  return passwordCriteria;
}

function randomizer(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

//  Generate password function
function generatePassword() {
  var options = askPasswordCriteria();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.containLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(randomizer(lowerCase));
  }
  if (options.containUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(randomizer(upperCase));
  }
  if (options.containNumberOptions) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(randomizer(numberOptions));
  }
  if (options.containSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(randomizer(specialCharacters));
  }

}
// Code Given
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
