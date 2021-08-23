var number = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var character = ["#", "!", "&", "$", "%", "^"]


// NEED A FUNCTION that defines the length and also prompts the user with length question
    // need some other questions regarding the password, does it have lowercase? does it have uppercase? does it have characters?
function Questions() {
var PasswordLength = prompt("What's the length of your password?");
if(PasswordLength > 128) {
   alert("sorry your password should be less than 128 characters")
}
if(PasswordLength < 8) {
    alert("sorry your password should be more than 8 characters")
}

var ChoosesNumbers = confirm("If you want numbers in your password click okay");
var ChooseUpper = confirm ("If you want uppercase in your password click okay");
var ChooseLower = confirm ("If you want lowercase in your password click okay");
var ChooseCharacter = confirm ("If you want character in your password click okay");

var StoreSelections = {
    ChoosesNumbers: ChoosesNumbers,
    ChooseUpper: ChooseUpper,
    ChooseLower:ChooseLower,
    ChooseCharacter: ChooseCharacter,

}

return StoreSelections; 
}

// Need another function that actually created the password 
function CreatePassword() {

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
