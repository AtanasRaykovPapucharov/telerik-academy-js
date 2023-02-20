let input = ["5"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const str = gets();

const cards = "AKQJ";
const inputAsNum = Number(str);
const isNumber = !isNaN(inputAsNum);

if (
  (!isNumber && !cards.includes(str)) ||
  (isNumber && (inputAsNum < 2 || inputAsNum > 10))
) {
  print("no");
} else {
  print("yes");
}