let input = ["7 2 -2 1 -5 4 5 -3 1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const arr = gets().split(" ");
let neg = "";
let pos = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes("-")) neg += `${arr[i]} `;
  else pos += `${arr[i]} `;
}

let result = neg + pos;

print(result.trim());