let input = ["3621"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let numStr = gets();
let even = 0;
let odd = 0;
let num;

for (let i = 0; i < numStr.length; i++) {
  num = Number(numStr[i]);

  if(num % 2 === 0) {
    even += num;
  } else {
    odd += num;
  }
}

if(even < odd) {
  print(`${odd} cups of coffee`);
} else if(even > odd) {
  print(`${even} energy drinks`);
} else {
  print(`${even} of both`);
}