let input = ["telerik", "teleric"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

// const a = gets();
// const b = gets();
// const value = a.localeCompare(b);

// if (value === 0) {
//   console.log("equal");
// } else if (value < 0) {
//   console.log("first");
// } else {
//   console.log("second");
// }

// dima
let arr1 = gets().split("");
let arr2 = gets().split("");

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i].charCodeAt(0);
}

for (let i = 0; i < arr2.length; i++) {
  sum2 += arr2[i].charCodeAt(0);
}

if (sum1 < sum2) {
  console.log("first");
} else if (sum2 < sum1) {
  console.log("second");
} else {
  console.log("equal");
}
