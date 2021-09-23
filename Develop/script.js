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
//prom0pt question
function passwordQuestion () {
  var text;
  var userLength = prompt("Please choose password length between 8-128 characters.");
  if (!userLength) {
    alert("Have a good day!");
    return;
  }
  if (userLength <8 || userLength >128) {
    prompt("Please choose password length between 8-128 characters.");
    passwordQuestion()
  }
  else lowerCaseQuestion ();
}
//lowercase question
function lowerCaseQuestion () {
  var text;
  var userLower = confirm("Will your password contain lowercases?");
  if (lowerCaseQuestion === true) {
    upperCaseQuestion();
  }
  else {
    upperCaseQuestion();
  }
}


//uppercase
function upperCaseQuestion () {
  var text;
  var userUpper = confirm("Will your password contain uppercases?");
  if (upperCaseQuestion  === true) {
    numericQuestion();
  }
  else {
    numericQuestion();
  }
}


//numeric
function numericQuestion () {
  var text;
  var userNumber = confirm("Will your password contain numbers?");
  if (numericQuestion === true) {
    specialQuestion();
  }
  else {
    specialQuestion();
  }
}

//special character
function specialQuestion () {
  var text;
  var userSpecial = confirm("Will your password contain special characters?");
  if (specialQuestion === true) {
    writePassword();
}
else {
  writePassword();
}
}

// add confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// Add event listener to generate button
generateBtn.addEventListener("click", passwordQuestion);
