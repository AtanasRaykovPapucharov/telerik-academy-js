let input = ["2"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
let result;

for (let i = 1; i <= n; i++) {
  result = "";

  for (let j = i; j <= i + n - 1; j++) {
    result += `${j} `;
  }

  print(result.trim());
}