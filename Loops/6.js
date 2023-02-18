let input = ["8", "3"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = BigInt(Number(gets()));
let k = BigInt(Number(gets()));
let result = 1n;
for (i = k + 1n; i <= n; i++) {
  result = result * i;
}
console.log(String(result));
