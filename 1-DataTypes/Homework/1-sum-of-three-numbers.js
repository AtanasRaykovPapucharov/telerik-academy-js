let input = ["4", "9", "12"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  //-------------------------

print(+gets() + +gets() + +gets());
