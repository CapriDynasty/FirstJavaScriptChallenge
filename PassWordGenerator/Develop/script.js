// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password")
var allCharacters = "1234567890abcdefghijklmnoqrstuvwxyz!@#$%^&*_-+=?/ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lenght = 8
// Write password to the #password input
function writePassword(event) {
  event.preventDefault
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for (i=0; i<=lenght; i++){
    [Math.floor(math.random()+password.length)]
    var password = allCharacters[math.floor(math.random()+password.lenght)]
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
