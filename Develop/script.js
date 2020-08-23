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

function askPasswordCriteria() {
  var length = parseInt (
    prompt("Enter the amount of characters you would like in your password.")
  );

  if (length >= 8) {
    var containLowerCase = confirm("Would you like to have lower case letters in your password?");
    var containUpperCase = confirm("Would you like to have upper case letters in your password?");
    var containNumberOptions = confirm("Would you like to have numbers in your password?");
    var containSpecialCharacters = confirm("Would you like to have special characters in your password?");
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

function generatePassword() {
  var options = askPasswordCriteria();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

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
