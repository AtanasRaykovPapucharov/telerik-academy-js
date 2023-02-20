let input = ["5", "2", "1", "1", "6", "3"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const count = gets();
let num;
let odd = 1;
let even = 1;

for (let i = 0; i < count; i++) {
  num = +gets();

  if (i % 2 === 0) {
    odd *= num;
  } else {
    even *= num;
  }
}

if (odd === even) {
  print(`yes ${odd}`);
} else {
  print(`no ${odd} ${even}`);
}