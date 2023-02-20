let input = ["0 15 30"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

gets().split(" ").forEach(i => print(+i * 9 / 5 + 32))
