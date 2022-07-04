// Assignment code here
function generatePassword() {
  alert('Welcome to the random password generator, please answer the following prompts to customize your new password');
  var passwordLength = prompt("Please enter how many characters you would like your password from 8-128.");
  //To make sure password length was being stored correctly
  // console.log(passwordLength);
  //Added a cancel option to generating a random password
  if (!passwordLength) {
    return;
  }
    while (passwordLength < 8 || passwordLength > 128) {
      alert("You may only have a password character length between 8-128");
      var passwordLength = prompt("Please enter how many characters you would like your password from 8-128.");
        if (!passwordLength) {
          return;
        }
    }
  var acceptedCharacters = "";
  var lowerCase = confirm('Would you like to include lower case characters?');
    if (lowerCase) {
      //include lower case characters
      acceptedCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
  var upperCase = confirm('Would you like to include upper case characters?');
    if (upperCase) {
      //include upper case characters
      acceptedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  var numeric = confirm('Would you like to include numeric characters?');
    if (numeric) {
      //include numeric characters
      acceptedCharacters += "0123456789";
    }
  var specialCharacters = confirm('Would you like to include special characters?');
    if (specialCharacters) {
      //include special characters
      acceptedCharacters += "!@#$%^&*()+<>?/`~";
    }
    if (!acceptedCharacters) {
      alert("Your password must inlcude either lower case, uppercase, numeric, or special characters. Please choose at least one option while generating password.");
      return;
    }

    var password = "";
    //Added this console.log to check if acceptedCharacters was actually containing the characters specified
    // console.log(acceptedCharacters);
      for (var i = 0; i < passwordLength; i++) {
        randomNumber = Math.floor(Math.random() * acceptedCharacters.length);
        password += acceptedCharacters.charAt(randomNumber);
      }
    
    return password;
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

