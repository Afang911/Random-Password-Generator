var character length = 8;
var choiceArr = [] ;

var specialCharArr = ["`", "!", "@", "$", "#", "%", "^", "&", "*", "?", "<", ">", "-", "=", "+"] ; 
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
function getPrompt(){
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character Length has to be a number between 8-128 digits.");
    return false; 
  }
  if (confirm("Add Lowercase Letters in your Password?")){
    choiceArr = choiceArr.concat(lowerCaseArr); 
  }
  if (confirm("Add Uppercase Letters in your Password?")){
      choiceArr = choiceArr.concat(upperCaseArr); 
  }
  if (confirm("Add Special Characters in your Password?")){
    choiceArr = choiceArr.concat(specialCharArr); 
  }
  if (confirm("Add Numbers to your Password?")){
      choiceArr = choiceArr.concat(numberArr); 
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
