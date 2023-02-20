let input = ["4", "9", "12"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  //-------------------------

const a = +gets();
const b = +gets();
const c = +gets();

print(Math.max(a, b, c) + Math.min(a, b, c));
