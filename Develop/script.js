// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9,];
var lowerA = "abcdefghijklmnopqrstuvwxyz";
var upperA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()";
var array = ""
var userLength = 0;
var userLower = false;
var userUpper = false;
var userNumber = false;
var userSpecial = false;


function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.
  var password = "uwu";
  return password;
}


// Write password to the #password input
function writePassword() {
  if (userLower) {
    userLength++
    array += lowerA
    password += lowerA[Math.floor(Math.random() * lowerA.length)]
  }
  // upper check
  if (userUpper) {
    userLength++
    array += upperA
    password += upperA[Math.floor(Math.random() * upperA.length)]
  }
  // number check
  if (userNumber) {
    userLength++
    array += numbers
    password += numbers[Math.floor(Math.random() * numbers.length)]
  }
  // spec check
  if (userSpecial) {
    userLength++
    array += special
    password += special[Math.floor(Math.random() * special.length)]
  }
  for (let i = 0; i < length; i++) {
    password += array[Math.floor(Math.random() * array.length)]
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// add confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//prom0pt question
function passwordQuestion () {
  var userLength = prompt("Please choose password length between 8-128 characters.");
  if (!userLength) {
    alert("Have a good day!");
    return;
  }
  if (userLength <8 || userLength >128) {
    prompt("Please choose password length between 8-128 characters.");
    passwordQuestion();
  }
  else lowerCaseQuestion ();
}
//lowercase question
function lowerCaseQuestion () {

  userLower = confirm("Will your password contain lowercases?");
    upperCaseQuestion();
}
//uppercase
function upperCaseQuestion () {
  userUpper = confirm("Will your password contain uppercases?");
    numericQuestion();
}
//numeric
function numericQuestion () {
  userNumber = confirm("Will your password contain numbers?");
    specialQuestion();
}
//special character
function specialQuestion () {
  userSpecial = confirm("Will your password contain special characters?");
    condition();
}
 function condition () {
   if (userLower === false && userUpper === false && userNumber === false && userSpecial === false) {
    alert("Please select at least one!");
    lowerCaseQuestion ();
  }else writePassword(); 
 }



// add confirm whether or not to include lowercase, uppercase, numeric, and/or special characters !userLower && !userUpper && !userNumber && !userSpecial


// Add event listener to generate button
generateBtn.addEventListener("click", passwordQuestion);
