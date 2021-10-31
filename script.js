// Assignment code here
function generatePassword() {

  //establishing arrays and their parameters for the password generator to pull from

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", "<", ">", ".", "|", "'", '"'];

  //arrays to be used for the final generated password

  var finalArray = [];
  var userArray = [];

  //window prompts and confirms to ask the end user what parameters they would like to use for their password

  var totalCharacters = prompt("How many characters do you want your password to be?", "Please enter a number between 8 and 128");
  if (totalCharacters < 8) {
    window.alert("password length should be between 8 and 128 characters")
    return null;
  };
  if (totalCharacters > 128) {
    window.alert("password length should be between 8 and 128 characters")
    return null;
  };
  var numbers = confirm("Do you to want include numbers in your password?");
  var uppercase = confirm("Do you want to include uppercase letters in your password?");
  var lowercase = confirm("Do you want to include lowercase letters in your password?");
  var specialCharacters = confirm("Do you want to include special characters in your password?");

  //building out the password based on the answers to the prompts and confirmations

  if (numbers) {
    finalArray = finalArray.concat(numbArray);

  }

  if (uppercase) {
    finalArray = finalArray.concat(uppercaseArray);

  }

  if (lowercase) {
    finalArray = finalArray.concat(lowercaseArray);

  }

  if (specialCharacters) {
    finalArray = finalArray.concat(characterArray);
  }
  console.log(finalArray)

  for (var i = 0; i < totalCharacters; i++) {

    userArray.push(finalArray[Math.floor(Math.random() * finalArray.length)]);
  }

  return userArray.join("");
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