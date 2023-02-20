let input = ["3", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = parseInt(gets());
const x = parseFloat(gets());

let result = 1;

for (let i = 1; i <= n; i++) {
  result += fact(i) / Math.pow(x, i);
}

print(result.toFixed(5));

function fact(m) {
  let result = 1;

  for (let i = m; i > 1; i--) {
    result *= i;
  }

  return result;
}