let input = ["4", "3", "11", "40"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const days = +gets();
const hours = +gets();
const mins = +gets();
let sec = +gets();

sec = sec + 60 * mins + 60 * 60 * hours + 60 * 60 * 24 * days;

print(sec);