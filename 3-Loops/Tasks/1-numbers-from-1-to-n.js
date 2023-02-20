let input = ["10"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const num = Number(gets());
let result = "";

for (let i = 1; i <= num; i++) {
  result += `${i} `;
}

print(result.trim());
