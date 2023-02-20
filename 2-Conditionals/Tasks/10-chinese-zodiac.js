let input = ["2000"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const animals = [
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
  "Rat",
  "Ox",
  "Tiger",
  "Hare",
  "Dragon",
  "Snake",
  "Horse",
  "Sheep",
];

const year = Number(gets());

print(animals[year % 12]);