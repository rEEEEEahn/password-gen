// Assignment Code
var generateBtn = document.querySelector("#generate");
var userLength = 0
var userLower = false
var userUpper = false
var userNum = false
var userSpecial = false
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()"
var array = ""
var password = ""
var prequisite = 0



  function check(){
    length = prompt("Please choose password length between 8-128 characters.")
    if (length < 8 ||length > 128) {
      alert("Please choose password length between 8-128 characters.")
      check()
    } else if (!Number.isInteger(length)) {
      alert('Only numbers please!')
      check()
    }
  }
  function passwordQuestion(){
    lowerCase = confirm('Do you need Lower Case letters?')
    upperCase = confirm('Do you need Upper Case letters?')
    nums = confirm('Do you need numbers?')
    specChars = confirm('Do you need special characters?')
    if (!lowerCase && !upperCase && !specChars && !nums) {
      alert('Invalid input, please choose at least one parameter!')
      passwordQuestion()
    }
  }


  // add confirm whether or not to include lowercase, uppercase, numeric, and/or special characters !userLower && !userUpper && !userNumber && !userSpecial


  // Add event listener to generate button

  // Checks includes adding array to chosen array and adding prequisite characters
  // lowerCase check
  // upper check
  // number check
  // spec check
  // password generation loop