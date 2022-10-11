// Think back to algebra... "Solve for x"
// In algebra: x + 2 = 7
// Solution: x = 5

// we may even see y = 2x + 3 where y represents one axis, and x represents the other. 
// similar in js, though here we don't need to "find out" what the variables are. 
// instead, we TELL JS what the variables should contain.

// For example... I could write this multiple times... 
console.log('antidisestablishmentarianism');
console.log('antidisestablishmentarianism');
// OR I could store it in a variable. 
let favoriteWord = 'antidisestablishmentarianism'; // can be any data type
console.log(favoriteWord);

/* 
Breaking it down
let -> "hey OS, please set aside some space"
favoriteWord -> "this is what you should remember it by"
'antidisestablishmentarianism' -> "here's the value to store in it"
*/

// We can re-assign variables
favoriteWord = 'Javascript';
console.log(favoriteWord + ' is cool');
favoriteWord = 5; // Any type is OK!
console.log( 5 + favoriteWord);
