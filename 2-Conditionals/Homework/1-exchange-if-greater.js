let input = ["5", "3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n1 = +gets();
const n2 = +gets();

let result = `${n1} ${n2}`;

if (n1 > n2) result = `${n2} ${n1}`;

print(result);