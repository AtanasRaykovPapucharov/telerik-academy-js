let input = ["good"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const inputStr = gets();
let result = "";

if (!isNaN(inputStr)) {
  result = Number(inputStr) + 1;
} else {
  for (let i = inputStr.length - 1; i >= 0; i--) {
    result += inputStr[i];
  }
}

print(result);
