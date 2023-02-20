let input = ["1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const digits = "0123456789";
const digitsAsWord = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const word = gets();

if (input.length === 1 && digits.includes(word)) {
  print(digitsAsWord[+word]);
} else {
  print("not a digit");
}