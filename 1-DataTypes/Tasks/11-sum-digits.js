let input = ["5243"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const num = gets();

print(+num[0] + +num[1] + +num[2] + +num[3]);
