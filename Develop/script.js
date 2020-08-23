function passwordCriteria () {
  var length = parseInt (
    prompt("Enter the amount of characters you would like in your password.")
  );
}

function generatePassword() {
  var options = passwordCriteria();
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
