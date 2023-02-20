let input = ["-1", "-5", "0", "1", "-8"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let biggest = -200;
let sample;

for (let i = 0; i < 5; i++) {
  sample = parseInt(gets());

  if (sample > biggest) biggest = sample;
}

print(biggest);