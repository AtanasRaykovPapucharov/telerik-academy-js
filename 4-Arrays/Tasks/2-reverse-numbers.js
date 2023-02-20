let input = ["275693110742, 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const srt = gets();

print(srt.split("").reverse().join(""));