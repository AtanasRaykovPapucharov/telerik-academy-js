let input = ["2", "50", "40"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = Number(gets());
let sample;

for (let i = 0; i < n; i++) {
  sample = parseFloat(gets());
  print((sample - (sample * 65) / 100).toFixed(2));
}
