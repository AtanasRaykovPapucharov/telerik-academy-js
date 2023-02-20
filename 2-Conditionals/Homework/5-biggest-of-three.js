let input = ["-1", "-5", "0"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const a = Number(gets());
const b = Number(gets());
const c = Number(gets());

print(Math.max(a, b, c));