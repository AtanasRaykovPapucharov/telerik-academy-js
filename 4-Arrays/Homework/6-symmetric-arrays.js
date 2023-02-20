let input = ["4", "1 2 3 2 1", "2 1", "1 2 2 1", "4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();
let currArr;

for (let i = 0; i < n; i++) {
  currArr = gets().split(" ");

  if (!isSymmetric(currArr)) {
    print("No");
  } else {
    print("Yes");
  }
}

function isSymmetric(arr) {
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}