let input = ["telerik", "teleric"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const a = gets();
const b = gets();
const value = a.localeCompare(b);

if (value === 0) {
  console.log("equal");
} else if (value < 0) {
  console.log("first");
} else {
  console.log("second");
}