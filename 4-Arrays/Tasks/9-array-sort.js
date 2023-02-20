let input = ["0,1,0,3,12"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const numbers = gets().split(",");
let zeroCount = 0;
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == "0") ++zeroCount;
  else result.push(numbers[i]);
}

print(`${result.join()}${",0".repeat(zeroCount)}`);
