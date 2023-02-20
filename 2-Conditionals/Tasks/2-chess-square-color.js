let input = ["f", "3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const l = gets();
const r = +gets();

const ranks = "abcdefgh";
if (r % 2 === (ranks.indexOf(l) + 1) % 2) {
  print("dark");
} else {
  print("light");
}