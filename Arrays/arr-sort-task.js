let print = this.print || console.log;

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

const numbers = gets().split(",");
let counter = 0;
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (+numbers[i] == 0) ++counter;
  else result.push(numbers[i]);
}

print(`${result.join(",")}${",0".repeat(counter)}`);
