let input = ["8", "2", "15"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const bottles1 = Number(gets());
const bottles5 = Number(gets());
const capacity = Number(gets());

const bigBottlesNeeded = parseInt(capacity / 5);
let smallBottlesNeeded = capacity % 5;

if (bigBottlesNeeded > bottles5) {
  smallBottlesNeeded += (bigBottlesNeeded - bottles5)*5;
}

print(smallBottlesNeeded > bottles1 ? -1 : smallBottlesNeeded);
