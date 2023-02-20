let input = ["1", "2", "3", "5", "4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  //-------------------------


let sum = 0;

for (let i = 0; i < 5; i++) sum += +gets();

print(sum);