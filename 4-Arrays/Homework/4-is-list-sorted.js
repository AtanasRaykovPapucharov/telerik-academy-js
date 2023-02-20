let input = ["3", "1,2,3,4,5", "1,2,8,9,9", "1,2,2,3,2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
let arr;

for (let i = 0; i < n; i++) {
  arr = gets().split(",");
  print(isSorted(arr));
}

function isSorted(arr) {
  let next;
  for (let curr = 0; curr < arr.length; curr++) {
    next = curr + 1;
    if (+arr[next] - +arr[curr] < 0) return false;
  }
  return true;
}
