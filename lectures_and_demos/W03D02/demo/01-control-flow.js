/* 
**************************************
************ CONTROL FLOW ************
**************************************
*/
console.log('<--------- CONTROL FLOW ---------->');
let isItSunny = true; // boolean can only be true or false
console.log(isItSunny); // --> true
console.log(typeof isItSunny); // --> 'boolean'

if (isItSunny) { // boolean logic always follows this syntax: `if` followed by parens of the condition
  console.log("Let's go to the beach!");
} else { // otherwise, we don't want to run the first block
  console.log("Let's stay inside and read a good book!");
}

// Example: determine what we can make based on ingredients we have. 
let weHaveEggs = false;
let weHaveBacon = true;
if (weHaveEggs) {
  console.log('Make an omelet');
}
if (weHaveBacon) {
  console.log('Make some bacon');
}

let a = 4;
let b = 7;
// a === b - is a equal to b?
// a !== b - is a NOT equal to b?

// a > b - is a greater than b?
// a >= b - is a greater than or equal to b?
// a < b
// a <= b

console.log(a === 6); // false
console.log(a = 6); // this is NOT a comparison operator. It's an assignment!  it outputs 6, not true/false

let temp = 78;
let jacket

// this works, but is not ideal

if (temp > 70) {
  jacket = 'no jacket';
} else { // temp <= 70
  if(temp > 50) {
    jacket = 'light jacket';
  } else {
    jacket = 'heavy jacket';
  }
}
console.log(jacket);

// this is preferable! Use `else if`

if (temp > 70) {
  jacket = 'no jacket';
} else if(temp > 50) {
  jacket = 'light jacket';
} else {
  jacket = 'heavy jacket';
}

console.log(jacket);

console.log('<--------- TRUTHY VS FALSY ---------->');
/* 
8 Falsy values (really just 6)

false
0
''
null
undefined
NaN
-0 // silly
0n // BigInt - we won't get into this much.  Not even fully supported yet.
*/

let myNum = 0;

if(myNum) {
  console.log('the number is not zero!');
} else {
  console.log('its zero');
}

if(undefined) {
  console.log('we have something');
} else {
  console.log('nothing here');
}

