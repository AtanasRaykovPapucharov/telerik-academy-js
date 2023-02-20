let input = ["3", "1", "2", "3", "1", "2", "3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
const arr = [];

let result = "equal";
let curr;

for (let i = 0; i < n; i++) {
  arr.push(gets());
}

for (let j = 0; j < n; j++) {
  curr = gets();

  if (curr !== arr[j]) {
    result = "not equal";
    break;
  }
}

print(result);