let input = ["integer", "2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const inputType = gets();
let value = gets();

switch (inputType) {
  case "integer":
    value = ++value;
    console.log(value);
    break;
  case "real":
    value = parseFloat(value) + 1.0;
    console.log(value.toFixed(2));
    break;
  case "text":
    console.log(value + "*");
    break;
  default:
    break;
}
