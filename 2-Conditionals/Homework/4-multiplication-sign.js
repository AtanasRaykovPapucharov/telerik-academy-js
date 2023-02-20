let input = ["2", "5", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const a = +gets();
const b = +gets();
const c = +gets();

const product = a * b * c;

if (product > 0) {
  console.log("+");
} else {
  console.log(product.toString()[0]);
}