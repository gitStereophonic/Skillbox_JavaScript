var myName = prompt('What is your name?');
var mySecondName = prompt('What is your surname?');

var fullName = myName + ' ' + mySecondName;

var myBirthYear = prompt('What is your birth year?');

var currentYear = 2019;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Hi, ' + fullName + '!');
}
else if (age >= 20 && age < 40) {
  alert ('Hello, ' + fullName + '! Welcome to hell!');
}
else {
  alert('Oh, mi scusi, ' + fullName + '! Prendi la sabbia!')
}
