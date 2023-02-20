let input = ["2 1 2 1 2 1 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const numbers = gets().split(" ").map(Number);

if (numbers.length < 3 || !isWaveArray(numbers)) {
  print("no");
} else {
  print("yes");
}

function isWaveArray(arr) {
  let a, b, c;

  for (let i = 1; i < arr.length - 1; i++) {
    a = arr[i - 1];
    b = arr[i];
    c = arr[i + 1];

    if ((a <= b && b <= c) || (a >= b && b >= c)) {
      return false;
    }
  }

  return true;
}