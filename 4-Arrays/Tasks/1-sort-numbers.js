let input = ["275, 693, 110, 742, 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let numbers = gets().split(", ");

numbers = numbers.sort((a, b) => b - a);

print(numbers.join(", "));
