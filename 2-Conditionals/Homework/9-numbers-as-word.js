let input = ["273"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const number = gets();

const numbers = [
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
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const wholeNums = [
  "00",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

switch (number.length) {
  case 1:
    print(numbers[+number]);
    break;
  case 2:
    print(numberAsWord(number));
    break;
  case 3:
    if (+number[0] > 0) {
      if (!number.includes("00")) {
        print(
          `${numbers[+number[0]]} hundred and ${numberAsWord(
            number.slice(1, 3)
          )}`
        );
      } else {
        print(`${numbers[+number[0]]} hundred`);
      }
    }
    break;
  default:
    break;
}

// two digits
function numberAsWord(num) {
  if (num[0] == 0) {
    return numbers[+num[1]];
  } else if (+num < 20) {
    return numbers[+num];
  } else if (num[1] == 0) {
    return wholeNums[+num[0]];
  } else {
    return `${wholeNums[+num[0]]} ${numbers[+num[1]]}`;
  }
}
