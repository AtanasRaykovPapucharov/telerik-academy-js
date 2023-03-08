let input = ["3 1 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const cables = gets().split(" ").map(Number);
const clear = "0".repeat(cables.length);

let counter = 0;
let min;

while (true) {
  if (cables.join("") == clear) {
    break;
  }

  min = Math.min(...cables.filter((i) => i > 0));

  for (let i = 0; i < cables.length; i++) {
    if (cables[i] > 0) {
      cables[i] -= min;
      counter++;
    }
  }
}

print(counter);
