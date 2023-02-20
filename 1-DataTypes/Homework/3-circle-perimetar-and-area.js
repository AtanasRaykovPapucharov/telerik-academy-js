let input = ["2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  //-------------------------

const radius = +gets();

print((2 * Math.PI * radius).toFixed(2));
print((Math.PI * radius * radius).toFixed(2));
