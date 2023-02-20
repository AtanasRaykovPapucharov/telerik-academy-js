let input = ["-5", "3", "-5"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let min = +gets();
let max = +gets();
let middle = +gets();
let num;

if (max < middle) {
  num = max;
  max = middle;
  middle = num;
}

if (max < min) {
  num = max;
  max = min;
  min = num;
}

if (min > middle) {
  num = min;
  min = middle;
  middle = num;
}

print(`${max} ${middle} ${min}`);