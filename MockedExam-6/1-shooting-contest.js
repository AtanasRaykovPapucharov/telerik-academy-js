let input = ["5", "1", "1", "2", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const targets = +gets();
const speedG = +gets();
const latenceG = +gets();
const speedP = +gets();
const latenceP = +gets();

const timeG = targets * speedG + 2 * latenceG;
const timeP = targets * speedP + 2 * latenceP;

print(timeG === timeP ? "Draw" : timeG < timeP ? "George" : "Peter");
