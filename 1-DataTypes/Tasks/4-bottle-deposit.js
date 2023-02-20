let input = ["10", "10"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const first = +gets();
const second = +gets();

print((first * 0.1 + second * 0.25).toFixed(2));