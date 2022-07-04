// Assignment code here
function generatePassword() {
  alert('Welcome to the random password generator, please answer the following prompts to customize your new password');
  var passwordLength = prompt("Please enter how many characters you would like your password from 8-128");
  console.log(passwordLength);
    while (passwordLength < 8 || passwordLength > 128) {
      alert("You may only have a password character length between 8-128");
      var passwordLength = prompt("Please enter how many characters you would like your password from 8-128");
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

    var password = "";
    console.log(acceptedCharacters);
      for (var i = 0; i < passwordLength; i++) {
        randomNumber = Math.floor(Math.random() * acceptedCharacters.length);
        password += acceptedCharacters.charAt(randomNumber);
      }
    
    // for (var i = 0; i <= passwordLength; i++) {
    //   password = acceptedCharacters[Math.floor(Math.random() * passwordLength)];
    // }
    // console.log(password);
    return password;

    //What if you had an array with numeric, upper, lower, and special
    //another array for numeric, upper, and lower
    //another array for numeric and upper
    //and a final array just for numeric
    //and then randomize the array
    //this wont work if user input is 100 and array length is only 10
    //maybe a for loop with if statement inside and just have one array with every possible character in it
    //and loop thru as many times as user said and eliminate certain characters depending on user input
    // numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // numericUpper = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // numericUpperLower = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // numericUpperLowerSpecial = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', '?', '~', '`'];
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

