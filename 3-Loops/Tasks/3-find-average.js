let input = ["3", "1", "1", "1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = Number(gets());
let result = 0;

for (let i = 0; i < n; i++) {
  result += Number(gets());
}

print((result / n).toFixed(2));
