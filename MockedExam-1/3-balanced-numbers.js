let input = ["275", "693", "110", "742"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let num;
let sum = 0;
while(true) {
  num = gets();
  if(!num) break; 
  if (isBalanced(num)) sum += +num;
}

print(sum)

function isBalanced(numString) {
  if (+numString[0] + +numString[2] === +numString[1]) return true;
  return false;
}