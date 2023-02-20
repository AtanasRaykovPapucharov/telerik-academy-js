let input = ["3,-12,0,0,13,5,1,0,-2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const numbers = gets().split(",");
const count = numbers.length;
let sum = 0;
let belowAvg = [];
let aboveAvg = [];

for (let i = 0; i < count; i++) {
  sum += Number(numbers[i]);
}

let avg = sum / count;

print(`avg: ${avg.toFixed(2)}`);

for (let i = 0; i < count; i++) {
  if (Number(numbers[i]) < avg) {
    belowAvg.push(numbers[i]);
  } else if (Number(numbers[i]) > avg) {
    aboveAvg.push(numbers[i]);
  }
}

print(`below: ${belowAvg.join(",")}`);

print(`above: ${aboveAvg.join(",")}`);
