let input = ["12345", "4648"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const inputRonnie = gets();
const inputReanne = gets();

const numRonnie = Number(inputRonnie);
const numReanne = Number(inputReanne);

const numRonnieArr = inputRonnie.split("").map(Number);
const numReanneArr = inputReanne.split("").map(Number);

let hiddenRonnie = "";
let hiddenReanne = "";

let devider;

// Ronnie
for (let i = 0; i < numRonnieArr.length; i++) {
  devider = numRonnieArr[i];

  if (numRonnie % devider === 0) {
    hiddenRonnie += devider;
  }
}

// Reanne
for (let i = 0; i < numReanneArr.length; i++) {
  devider = numReanneArr[i];

  if (numReanne % devider === 0) {
    hiddenReanne += devider;
  }
}

if (+hiddenRonnie > +hiddenReanne) {
  print(`Ronnie ${hiddenRonnie}`);
} 
else if (+hiddenRonnie < +hiddenReanne) {
  print(`Reanne ${hiddenReanne}`);
} 
else {
  print(`Tie ${hiddenReanne}`);
}
