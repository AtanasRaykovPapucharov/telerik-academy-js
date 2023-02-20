let input = ["20"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const m = +gets(); // miles / gal

print(`${parseInt((100 / m) * (4.54 / 1.6))} litres per 100 km`);
