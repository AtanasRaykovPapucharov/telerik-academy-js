let input = ["5", "4 3 2 5 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const count = gets();
let nums = gets();
nums = nums.split(" ");
let odd = 1;
let even = 1;

for (let i = 0; i < count; i++) {
  if (i % 2 === 0) {
    odd *= +nums[i];
  } else {
    even *= +nums[i];
  }
}

if (odd === even) {
  print(`yes ${odd}`);
} else {
  print(`no ${odd} ${even}`);
}
