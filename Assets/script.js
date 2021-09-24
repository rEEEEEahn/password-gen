// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = 0
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
    }
  }
  function passwordQuestion(){
    userLower = confirm('Do you need Lower Case letters?')
    userUpper = confirm('Do you need Upper Case letters?')
    userNum = confirm('Do you need numbers?')
    userSpecial = confirm('Do you need special characters?')
    if (!userLower && !userUpper && !userNum && !userSpecial) {
      alert('Invalid input, please choose at least one parameter!')
      passwordQuestion()
    }
  }

 
  // add confirm whether or not to include lowercase, uppercase, numeric, and/or special characters !userLower && !userUpper && !userNumber && !userSpecial


  // Add event listener to generate button
  document.getElementById('generate').addEventListener('click', function () {

    check()
    passwordQuestion()
    chosenArray = ""
    password = ""
    prequisite = 0

    if (!userLower && !userUpper&& !userNum&& !userSpecial) {
      alert("You must choose at least one parameter")      
      location.reload()
    }
  // lowerCase check
  if (userLower) {
    prequisite++
    array += lower
    password += lower[Math.floor(Math.random() * lower.length)]
  }
  // upper check
  if (userUpper) {
    prequisite++
    array += upper
    password += upper[Math.floor(Math.random() * upper.length)]
  }
  // number check
  if (userNum) {
    prequisite++
    array += number
    password += number[Math.floor(Math.random() * number.length)]
  }
  // spec check
  if (userSpecial) {
    prequisite++
    array += special
    password += special[Math.floor(Math.random() * special.length)]
  }

  length -= prequisite

  // password generation loop
  for (let i = 0; i < length; i++) {
    password += array[Math.floor(Math.random() * array.length)]
  }
  console.log(password)
  document.getElementById('password').innerHTML = password
})