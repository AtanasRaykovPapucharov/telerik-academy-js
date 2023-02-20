let input = ["5", "2", "6", "5", "8", "3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = BigInt(Number(gets()));
const k = BigInt(Number(gets()));

let result = 1n;

for (let i = n; i > k; i--) {
  result *= i;
}

console.log(result);