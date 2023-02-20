let input = ["1,2,2,2,2,18,3,12"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const arr = gets().split(",");
let result = [];
let isAlreadyIn = false;
let current;

result.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
  current = arr[i];
  if (!result.includes(current)) {
    result.push(current);
  }
}

print(result.join(","));
