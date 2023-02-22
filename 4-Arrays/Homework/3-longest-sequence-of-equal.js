let input = ["10", "2", "1", "1", "2", "3", "2", "2", "2", "2", "1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//----------------------------

// Dimitar Dimitrow's refactored solution
const n = Number(gets());
const inputNums = [];
let sum = 0;

for (let i = 0; i < n; i++) {
  // filling the input numbers array
  inputNums[i] = Number(gets());
  // adding to sum
  sum += inputNums[i];
}

// average equals first number
if (sum / n === inputNums[0]) {
  // all numbers are equal
  print(n);
} else {
  const sortDescending = arr => arr.sort((a, b) => b - a);
  const lengthsList = [];
  let counter = 1;

  // only one digit
  if (inputNums.length === 1) {
    print("1");
  } else {
    for (let i = 0; i < n - 1; i++) {
      // comparing each nums pair
      if (inputNums[i] !== inputNums[i + 1]) {
        // collecting current length
        lengthsList.push(counter);
        // going to count again
        counter = 1;
      } else {
        // counting equals
        counter++;
      }
    }

    let result = sortDescending(lengthsList)[0];
    print(result);
  }
}
