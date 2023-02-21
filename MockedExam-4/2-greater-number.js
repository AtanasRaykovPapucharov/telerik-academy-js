let input = ["4,1,2", "1,3,4,2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let firstArray = gets().split(",").map(Number);
let secondArray = gets().split(",").map(Number);
let temp, ind;

for (let i = 0; i < firstArray.length; i++) {
  temp = -1;
  ind = secondArray.indexOf(firstArray[i]);

  for (let j = ind + 1; j < secondArray.length; j++) {
    if (secondArray[j] > secondArray[ind]) {
      temp = secondArray[j];
      break;
    } 
  }

  firstArray[i] = temp;
}

print(firstArray.join());