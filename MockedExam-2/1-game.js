let input = ["185"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const n = gets();
let biggest = +n[0] + +n[1] + +n[2];
let samples = [
  +n[0] * +n[1] * +n[2],
  +n[0] + +n[1] * +n[2],
  +n[0] * +n[1] + +n[2],
];

samples.forEach(s => {
  if (s > biggest) biggest = s;
});

print(biggest);
