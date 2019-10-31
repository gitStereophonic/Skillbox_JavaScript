var userName = prompt('What is your name?');
var userSecondName = prompt('What is your surname?');

var userFullName = userName + ' ' + userSecondName;

var userBirthYear = prompt('What is your birth year?');

var currentYear = new Date().getFullYear();
var userAge = currentYear - userBirthYear;

if (userAge < 20) {
  alert('Hi, ' + userFullName + '!');
}
if (userAge >= 20 && age < 40) {
  alert ('Hello, ' + userFullName + '!');
}
if (userAge >= 40) {
  alert('Oh, mi scusi, ' + userFullName + '!');
}
