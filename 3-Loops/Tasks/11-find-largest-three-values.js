let input = ["3", "3", "1", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
let nums = [];
let current;

for (let i = 0; i < n; i++) {
  current = +gets();
  nums.push(current);
}

nums = sortedArray(nums);

print(`${nums[0]}, ${nums[1]} and ${nums[2]}`);

function sortedArray(arr) {
  return arr.sort((a, b) => b - a);
}
