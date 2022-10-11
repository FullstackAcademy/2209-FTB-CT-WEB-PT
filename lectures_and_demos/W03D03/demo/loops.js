// loop over a string from left to right

let letters = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < letters.length; i++) {
  let currentLetter = letters[i];
  console.log(currentLetter);
}

// loop from right to left

for (let i = letters.length - 1; i >= 0; i--) {
  let currentLetter = letters[i];
  console.log(currentLetter);
}

// while loop

let i = letters.length - 1;

while (i >= 0) {
  console.log(letters[i]);
  i--;
}

// break and continue

for (let i = 10; i >= 1; i--) {
  if (i === 7) {
    // continue;
    break;
  }

  console.log("i: ", i);
}

// iterate through an array

let students = ["Ryan", "Jordan", "Bethany", "Emma", "Brogen", "Alan", "Kate"];

function isAwesome(string) {
  console.log(string + " is awesome");
}

let j = 0;

while (j < students.length) {
  isAwesome(students[j]);
  j++;
}
