var myName = prompt('Name, bitch!');
var myBirthYear = prompt('Give me your birth year');

var currentYear = 2019;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Get out of here, you little ' + myName + '!');
}
else if (age >= 20 && age < 40) {
  alert ('Hi, ' + myName + '! Welcome to hell!');
}
else {
  alert('Oh, mi scusi, ' + myName + '! Prendi la sabbia!')
}
