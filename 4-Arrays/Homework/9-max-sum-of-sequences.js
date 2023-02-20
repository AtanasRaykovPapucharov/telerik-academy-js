let input = ["10", "2", "3", "-6", "-1", "2", "-1", "6", "4", "-8", "8"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
const nums = [];

for (let i = 0; i < n; i++) {
  nums.push(+gets());
}

let max = Number.MIN_VALUE;
let curr;

for (let i = 1; i <= n; i++) {
  curr = arrayMaxConsecutiveSum(nums, i);
  if (curr > max) max = curr;
}

print(max);

function arrayMaxConsecutiveSum(nums, k) {
  let result = 0;
  let tempSum = 0;
  for (var i = 0; i < k - 1; i++) {
    tempSum += nums[i];
  }
  for (var i = k - 1; i < nums.length; i++) {
    tempSum += nums[i];
    if (tempSum > result) result = tempSum;
    tempSum -= nums[i - k + 1];
  }
  return result;
}