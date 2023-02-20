let input = ["1,2,3,3,5"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let numbers = gets().split(",").map(Number)
let result = []

for(let i = 1; i <= numbers.length; i++) {
  if (!numbers.includes(i)) result.push(i);
}

console.log(result.join())
