let input = ["4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const hy = +gets();

if (hy < 3) {
  print(hy * 10);
} else {
  print(20 + (hy - 2) * 4);
}