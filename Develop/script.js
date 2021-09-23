// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.
  var password = "password1234";
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function passwordQuestion () {
  var text;
  var user = prompt("Please choose password length between 8-128 characters.");
  if (user == null || user == "") {
     alert("Have a good day!");
  }
  if (user <8 || user >128) {
    prompt("Please choose password length between 8-128 characters.");
    passwordQuestion()
  }
  else lowercaseQuestion () 
}

function lowercaseQuestion () {
  var text;
  var user = confirm("Will your password contain lowercases?");
  }

// add confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// Add event listener to generate button
generateBtn.addEventListener("click", passwordQuestion);
