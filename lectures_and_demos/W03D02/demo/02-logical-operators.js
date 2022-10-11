/* 
*******************************************
************ LOGICAL OPERATORS ************
*******************************************
*/
// 3 MAIN OPERATORS
// AND = &&
// OR - ||
// NOT - !

console.log('<--------- AND OPERATOR ---------->');

let pretzelsInStock = true;
let amountOfChange = 2.00;

if (pretzelsInStock && amountOfChange >= 1.50) {
  console.log('Buy Pretzels');
} else {
  console.log('No Pretzels');
}
console.log('<--------- OR OPERATOR ---------->');

let rainy = true;
let excitingMovieOut = true;
let moneyIHave = 3.00;

if(rainy || excitingMovieOut) {
  console.log('Go to the movies');
} else {
  console.log('Go to the park');
}

// we can combine the logic
if((rainy || excitingMovieOut) && moneyIHave >= 4.00) {
  console.log('Go to the movies');
} else {
  console.log('Go to the park');
}

console.log('<--------- NOT OPERATOR ---------->');

if (!rainy) {
  console.log('Go to the movies');
} else {
  console.log('Go to the park');
}
