// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","?","/","<",">"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var passlength = "8"
// var pass = " "

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var prompts = promptUser();
  var passwordText = document.querySelector("#password");

  if (prompts) {
    var newPass = generatePassword();
    passwordText.value = newPass;
  }else{
    passwordText.value = "";

  }
  
}


function generatePassword() {  
    var password= "";
    for(var i = 0; i<passlength; i++) {
      var randomNum = Math.floor(Math.random() * pass.length);
      password = password + pass[randomNum];
    }
    return password;

  }

function promptUser() {

   pass = [];

  passlength = parseInt(prompt("Password must be 8 - 81 characters long."));

  if(isNaN(passlength) || passlength < 8 || passlength > 128){
    alert(" Password has to be 8 - 81 characters long. Try again.");
    return false;
  } 
  if (confirm("Would you like your password to contain lowercase characters?")){ 
    pass = [pass].concat(lowercase);
    console.log(pass)
  }
  if (confirm("Would you like your password to contain uppercase characters?")){ 
    pass = pass.concat(uppercase);
    console.log(pass)
  }
  if (confirm("Would you like your password to contain special characters?")){ 
    pass = pass.concat(special);
    console.log(pass)
  }
  if (confirm("Would you like your password to contain numbers?")){ 
    pass = pass.concat(numbers);
    console.log(pass)
  }
  return true;
}

  



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
