let input = ["2", "5", "-3"];

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

const d = b * b - 4 * a * c;
let x1, x2;

if (d >= 0) {
  const p = Math.sqrt(d);

  x1 = (-1 * b - p) / (2 * a);
  x2 = (-1 * b + p) / (2 * a);
}

print(`x1=${x1.toFixed(1)}`);
print(`x2=${x2.toFixed(1)}`);
