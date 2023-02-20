let input = ["100"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let n = +gets();

for (let i = 0; i < 3; i++) {
  n += n / 20;
  print(n.toFixed(2));
}