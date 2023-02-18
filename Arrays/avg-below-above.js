let print = this.print || console.log;

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

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
