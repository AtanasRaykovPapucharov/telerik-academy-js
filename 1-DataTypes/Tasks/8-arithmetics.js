let input = ["2", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let a = +gets();
let b = +gets();

print(a + b);
print(a - b);
print(a * b);
print(a % b);
print(Math.pow(a, b));
