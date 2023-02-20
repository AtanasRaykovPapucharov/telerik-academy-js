let input = ["5", "1", "go", "1", "there", "5"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();

let textResult = "";
let numberResult = 0;
let current;

for (let i = 0; i < n; i++) {
  current = gets();

  if (isNaN(current)) {
    textResult += `-${current}`;
  } else {
    numberResult += +current;
  }
}

if (textResult === "") {
  print("no words");
} else {
  print(textResult.replace("-", ""));
}
print(numberResult);
