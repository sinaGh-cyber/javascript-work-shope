// Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT)

// || (OR):
// If any of its arguments are true, it returns true, otherwise it returns false.

let result = a || b;

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

if (1 || 0) {
  // works just like if( true || false )
  alert('truthy!');
}

//let hour = 9;

//if (hour < 10 || hour > 18) {
 // alert('The office is closed.');
// }

 let hour = 12;
 let isWeekend = true;

 if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

// In JavaScript, the operator is a little bit trickier and more powerful.
// The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

// OR "||" finds the first truthy value:

result = value1 || value2 || value3;

// The OR || operator does the following:

// 1-Evaluates operands from left to right.
// 2-For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// 3-If all operands have been evaluated (i.e. all were false), returns the last operand.

// A value is returned in its original form, without the conversion.
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)



// This leads to some interesting usage compared to a “pure, classical, boolean-only OR”:

// 1-Getting the first truthy value from a list of variables or expressions:

let firstName = '';
let lastName = '';
let nickName = 'SuperCoder';

console.log(firstName || lastName || nickName || 'Anonymous'); // SuperCoder



// 2-Short-circuit evaluation:
// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

true || console.log('not printed');
false || console.log('printed');


/**********************************************************************************************************************/

// && (AND):

result = a && b;

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

//  let hour = 12;
//  let minute = 30;

 if (hour == 12 && minute == 30) {
   alert( 'The time is 12:30' );
 }

if (1 && 0) {
  // evaluated as true && false
  alert("won't work, because the result is falsy");
}

//   AND “&&” finds the first falsy value:

result = value1 && value2 && value3;

// The AND && operator does the following:

// 1-Evaluates operands from left to right.
// 2-For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// 3-If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// In other words, AND returns the first falsy value or the last value if none were found.

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0

console.log(1 && 2 && null && 3); // null

console.log(1 && 2 && 3); // 3, the last one


/**********************************************************************************************************************/

// ! (NOT):

result = !value;

// The operator accepts a single argument and does the following:

// 1-Converts the operand to boolean type: true/false.
// 2-Returns the inverse value.

console.log(!true); // false
console.log(!0); // true

console.log(!!'non-empty string'); // true
console.log(!!null); // false



/**********************************************************************************************************************/
// What is the code below going to output?

alert(null || 2 || undefined); // 2




// What's the result of OR'ed alerts?

alert(alert(1) || 2 || alert(3)); // 1 , 2




// What is the result of AND?

alert(1 && null && 2); // null


/****  reference: https://javascript.info/logical-operators   ****/
