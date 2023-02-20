let input = ["1, 2, 3, 2, 5, 2", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let nums = gets().split(", ").map(Number);
let target = +gets();

for (let i = 1; i < nums.length - 1; i++) {
  if (
    nums[i] === target &&
    nums[i] !== nums[i - 1] &&
    nums[i] !== nums[i + 1]
  ) {
    if (nums[i - 1] > nums[i + 1]) {
      nums[i] = nums[i - 1];
    } else {
      nums[i] = nums[i + 1];
    }
  }
}

print(`[${nums.join(", ")}]`)
