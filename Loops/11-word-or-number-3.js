let print = this.print || console.log;

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

const n = +gets();

let result = gets();
let isResultText, next;

for (let i = 1; i < n; i++) {
  isResultText = isNaN(result);
  next = gets();

  if ((isResultText && !isNaN(next)) || (!isResultText && isNaN(next))) {
    console.log(result);
    result = next;
  } else {
    if (isResultText && isNaN(next)) {
      result += `-${next}`;
    } else {
      result = +result + +next;
    }
  }

  if (i === n - 1) {
    console.log(result);
  }
}
