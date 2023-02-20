let input = ["3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();

print((n * (n + 1)) / 2);