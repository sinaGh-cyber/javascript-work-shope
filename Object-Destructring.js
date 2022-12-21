const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const obj = { a: 1, b: 2 };
 //const { a, b } = obj;

 //is equivalent to:
 //const a = obj.a;
 //const b = obj.b;

// Default value:

 //const [a = 1] = []; // a is 1
 //const { b = 2 } = { b: undefined }; // b is 2
 //const { c = 2 } = { c: null }; // c is null

 const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.

// Rest property:

 const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]



// Ignoring some returned values:

function f() {
  return [1, 2, 3];
}

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

const [c] = f();
console.log(c); // 1

//   Using a binding pattern as the rest property:

//  const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]

 //  const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4



// Unpacking properties from objects passed as a function parameter:

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
};

function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42

function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // `jdoe`

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"



//   Nested object and array destructuring:

const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localizationTags: [],
      lastEdit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung',
    },
  ],
  url: '/en-US/docs/Tools/Scratchpad',
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    }
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

/****  reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment   ****/
