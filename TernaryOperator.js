let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// let result = condition ? value1 : value2;

// accessAllowed = age > 18 ? true : false;

accessAllowed = age > 18;

// alert(accessAllowed);

/**********************************************************************************************************************/

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

let message =
  age < 3
    ? 'Hi, baby!'
    : age < 18
    ? 'Hello!'
    : age < 100
    ? 'Greetings!'
    : 'What an unusual age!';

alert(message);

/**********************************************************************************************************************/

// Non-traditional use of ‘?’:
// It’s not recommended to use the question mark operator in this way.

let company = prompt('Which company created JavaScript?', '');

company == 'Netscape' ? alert('Right!') : alert('Wrong.');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

/**********************************************************************************************************************/

// Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

result = a + b < 4 ? 'Below' : 'Over';

/**********************************************************************************************************************/

// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

let messageB;

if (login == 'Employee') {
  messageB = 'Hello';
} else if (login == 'Director') {
  messageB = 'Greetings';
} else if (login == '') {
  messageB = 'No login';
} else {
  messageB = '';
}

messageB =
  login == 'Employee'
    ? 'Hello'
    : login == 'Director'
    ? 'Greetings'
    : login == ''
    ? 'No login'
    : '';

/****  reference: https://javascript.info/ifelse   ****/
