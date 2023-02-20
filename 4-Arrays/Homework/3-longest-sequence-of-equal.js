let input = ["10", "2", "1", "1", "2", "3", "2", "2", "2", "2", "1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
let count = 1;
let maxLength = 1;
let current = gets();
let next;

if (n > 1) {
  for (let i = 1; i < n; i++) {
    next = gets();

    if (next != current) {
      if (count > maxLength) {
        maxLength = count;
      }
      current = next;
      count = 1;
    } else {
      count++;
    }
  }
}

print(maxLength);