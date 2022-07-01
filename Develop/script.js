// Assignment code here
function generatePassword() {
  var firstPrompt = alert('Welcome to the random password generator, please answer the following prompts to customize your new password');
  var passwordLength = prompt("Please enter how many characters you would like your password from 8-128");
    while (passwordLength < 8 || passwordLength > 128) {
      alert("You may only have a password character length between 8-128");
      var passwordLength = prompt("Please enter how many characters you would like your password from 8-128");
    }
  var lowerCase = confirm('Would you like to include lower case characters?');
    if (lowerCase) {
      //include lower case characters
      lowerCaseCharacterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }
  var upperCase = confirm('Would you like to include upper case characters?');
    if (upperCase) {
      //include upper case characters
      upperCaseCharacterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
  var numeric = confirm('Would you like to include numberic characters?');
    if (numeric) {
      //include numeric characters
      numericCharacterArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    }
  var specialCharacters = confirm('Would you like to include special characters?');
    if (specialCharacters) {
      //include special characters
      specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', '?', '~', '`'];
    }
  
}

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

