let input = ["3", "1", "2", "3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
let result = +gets();
let num;

for (let i = 1; i < n; i++) {
  num = +gets();

  if (result < num) result = num;
}

print(result);