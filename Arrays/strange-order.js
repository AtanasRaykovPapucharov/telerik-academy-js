let print = this.print || console.log;

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

const input = gets().split(",");

let neg = [];
let zero = [];
let pos = [];

for (let i = 0; i < input.length; i++) {
  if (+input[i] < 0) {
    neg.push(input[i]);
  } else if (input[i] == "0") {
    zero.push(input[i]);
  } else {
    pos.push(input[i]);
  }
}

print([...neg, ...zero, ...pos].join(","));
