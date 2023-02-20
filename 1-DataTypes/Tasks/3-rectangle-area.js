let input = ["12", "22"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const w = +gets();
const h = +gets();

print(w * h);