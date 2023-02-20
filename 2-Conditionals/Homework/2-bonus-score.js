let input = ["2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const num = +gets();

if (num > 0 && num < 4) {
  print(num * 10);
} else if (num > 3 && num < 7) {
  print(num * 100);
} else if (num > 6 && num < 10) {
  print(num * 1000);
} else {
  print("invalid score");
}