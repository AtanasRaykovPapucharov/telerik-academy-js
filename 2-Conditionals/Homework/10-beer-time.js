let input = ["1:00 PM"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let time = gets();
time = time.split(/:| /);
let isCorrectTime = true;

if (time.length !== 3 || isNaN(time[0]) || isNaN(time[1])) {
  isCorrectTime = false;
}

let isBeerTime = true;
let hour = parseInt(time[0]);
let zone = time[2];

if (!isCorrectTime) {
  console.log("invalid time");
} else {
  switch (zone) {
    case "AM":
      if (hour >= 3 && hour < 12) isBeerTime = false;
      break;
    case "PM":
      if (hour == 12) isBeerTime = false;
      break;
    default:
      break;
  }

  if (!isBeerTime) print("non-beer time");
  else print("beer time");
}