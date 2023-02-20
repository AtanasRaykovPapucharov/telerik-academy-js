let input = ["1020340567.89"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let numString = gets().replace(".", "").replace("-", "");
while(true) {
    if(numString.length < 2) break;
    numString = digitsSum(numString);
}
print(numString);

function digitsSum(numString) {
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        sum += +numString[i];
    }
    return sum.toString();
}