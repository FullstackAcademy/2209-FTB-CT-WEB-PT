// takes a number and returns the sum of all odd numbers up to that number

function onlyOdds(num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    debugger;
    if (i % 2 === 1) {
      sum += i;
    }
  }

  return sum;
}

let returnValue = onlyOdds(5); // 1 + 3 + 5
console.log(returnValue);
