let input = ["6", "1 2 3 4 3 6 5 8 3 9"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const target = +gets();
const numbers = gets().split(" ");
let counter = 0;
let first, second;

for (let i = 0; i < numbers.length - 1; i++) {
  first = +numbers[i];

  for (let j = i + 1; j < numbers.length; j++) {
    second = +numbers[j];

    if (first + second == target) {
      print(`${first},${second}`);
      counter++;
    }
  }
}

if (counter === 0) print("no pairs");