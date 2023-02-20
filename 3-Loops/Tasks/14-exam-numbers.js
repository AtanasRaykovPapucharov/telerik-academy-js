let input = ["100", "200", "12"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const start = Number(gets());
const end = Number(gets());
const target = Number(gets());

let digits,
  sum = 0;

for (let i = start; i <= end; i++) {
  digits = i.toString().split("");

  for (let j = 0; j < digits.length; j++) {
    sum += +digits[j];
  }

  if (sum === target) print(i);

  sum = 0;
}
