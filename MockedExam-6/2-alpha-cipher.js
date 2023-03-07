let input = ["111", "222", "333", "444", "555"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const n = 5;
let result = "";
let currNums, currProduct;

for (let i = 0; i < n; i++) {
  currNums = gets().split("").map(Number);
  currProduct = currNums[0] * currNums[1] * currNums[2];
  
  if(currProduct < 10) result += currProduct;
  else result += currProduct % 10;
}

print(result);
