const n = +gets();
let arr;

for (let i = 0; i < n; i++) {
  arr = gets().split(",");
  print(isSorted(arr));
}

function isSorted(arr) {
  let secondIndex;
  for (let firstIndex = 0; firstIndex < arr.length; firstIndex++) {
    secondIndex = firstIndex + 1;
    if (+arr[secondIndex] - +arr[firstIndex] < 0) return false;
  }
  return true;
}
