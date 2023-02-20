let input = ["27, 69, 11, 7", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let list = gets().split(",");
let n = +gets();

if (n < list.length) {
  list = [...list.slice(n), ...list.slice(0, n)];
} else if (n > list.length) {
  n = n % list.length;
  list = [...list.slice(n), ...list.slice(0, n)];
}

print(list.join(","));