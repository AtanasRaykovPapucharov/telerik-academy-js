let input = ["3", "2", "5", "1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = Number(gets());
let min = 10000;
let max = -10000;
let sum = 0;
let sample;

for (let i = 0; i < n; i++) {
  sample = parseFloat(gets());

  if (sample < min) min = sample;
  if (sample > max) max = sample;

  sum += sample;
}

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${(sum / n).toFixed(2)}`);
