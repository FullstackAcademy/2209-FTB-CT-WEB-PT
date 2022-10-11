/* 
***********************************
************ FUNCTIONS ************
***********************************
*/
console.log('<--------- FUNCTIONS ---------->');

let python = "Fira";
let pug = "Cody";
let bunny = "Eeyore";

// we may NOT want to write console.log and the same string three times.

console.log(python + " the Magnificent");
console.log(pug + " the Magnificent");
console.log(bunny + " the Magnificent");

// instead we may write a function...

function magnificent(critterName) {
  console.log(critterName + " the Magnificent");
}

// ... and call the function for each animal

magnificent(python);
magnificent(pug);
magnificent(bunny);

console.log('<--------- DEFINING VS INVOKING FUNCTIONS ---------->');

function greeting() { // this is DEFINING the function
  // our code will be here
  console.log('Hello how are you today?');
}

greeting(); // this is INVOKING the function

console.log('<--------- VISUALIZING FUNCTION EXECUTION ---------->');

function goodbye() {
  console.log('goodbye');
}

function greet() {
  console.log('howdy');
  goodbye();
}
console.log('Hi');
greet(); // where I INVOKE (call) the function determines where the code runs. 
goodbye(); 

console.log('<--------- PARAMETERS AND ARGUMENTS ---------->');
function sum(num1, num2) { // parameters - variables we use in our function
  console.log(num1 + num2);
}

sum(); // we get NaN because we never told sum what num1 and num2 should be
sum(3,5); // num1 holds 3. num2 holds 5. 

console.log('<--------- RETURNING VALUES FROM FUNCTIONS ---------->');
function sumTwo(num1, num2) {
  return num1 + num2;
}
let mySum = sumTwo(3, 5);
console.log(mySum); // the returned value from the function call
let sum2 = sumTwo(5, mySum); // we can use the result of a previous return in another call!
console.log(sum2);

console.log('<--------- RETURN VS CONSOLE.LOG ---------->');
function sumWithoutReturn(num1, num2) {
  console.log(num1 + num2);
}
let mySumNoReturn = sumWithoutReturn(3, 5);
console.log(mySumNoReturn); // undefined, because sumWithoutReturn doesn't return anything!

function sumThenLog(num1, num2) {
  return num1 + num2; // END of the function
  console.log('I am at the end of the function!'); // this never runs!
}
let sumAfterLogging = sumThenLog(3, 5);
console.log(sumAfterLogging);


