/* 
STRINGS
*/
// Numbers are "text"
// Why "String"? - Because it can be represented by a "string of characters" (i.e. a list)

// Double quotes, single quotes, backticks
console.log("hello world");
console.log('howdy world');
console.log(`hola world`);
console.log(typeof `hola world`);
// Note: We have to start and end with the same quote-type.
console.log("howdy y'all"); // we couldn't use single quotes here
console.log('howdy y\'all'); // escaping a single quote - no longer a single quote, but a character in the string

console.log('howdy'.length) // all strings have a length property
console.log("hello " + " " + "world"); // plus sign is the only operator we can use with strings