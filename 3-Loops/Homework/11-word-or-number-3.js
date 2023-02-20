let input = ["6", "1", "go", "1", "1", "there", "IT"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const n = +gets();

let result = gets();
let isResultText, next;

for (let i = 1; i < n; i++) {
  isResultText = isNaN(result);
  next = gets();

  if ((isResultText && !isNaN(next)) || (!isResultText && isNaN(next))) {
    console.log(result);
    result = next;
  } else {
    if (isResultText && isNaN(next)) {
      result += `-${next}`;
    } else {
      result = +result + +next;
    }
  }

  if (i === n - 1) {
    console.log(result);
  }
}
