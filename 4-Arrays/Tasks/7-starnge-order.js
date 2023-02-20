let input = ["3,-12,0,0,13,5,1,0,-2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const arr = gets().split(",");
const neg = [];
const zero = [];
const pos = [];

for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) < 0) {
    neg.push(arr[i]);
  } else if (arr[i] == "0") {
    zero.push(arr[i]);
  } else {
    pos.push(arr[i]);
  }
}

print([...neg, ...zero, ...pos].join());