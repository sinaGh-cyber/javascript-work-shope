`string text`

`string text line 1 
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`


// Template literals are enclosed by backtick (`) characters instead of double or single quotes.

`\`` === "`"; // true
`\${1}` === "${1}"; // true

// Multi-line strings:

console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"




// String interpolation:

const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."


console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."


const classes = `header ${
    isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
  }`;


//   With nesting of template literals, you can do this:

//   const classes = `header ${
//     isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
//   }`;



// Tagged templates:

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.




/****  reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals   ****/
