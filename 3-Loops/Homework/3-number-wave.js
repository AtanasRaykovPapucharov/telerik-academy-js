let input = ["3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const num = +gets();
let result = "";

for (let i = 1; i <= num; i++) {
  result += `${i} `;
}

for (let i = num - 1; i > 0; i--) {
  result += `${i} `;
}

print(result.trim());