let input = ["8 2 1 3 5 8 9 11 2 5"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const arr = gets()
  .split(" ")
  .sort((a, b) => b - a);

print(`${arr[0]} ${arr[1]}`);