let input = ["LLRD"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let commands = gets().split("");
const point = {
  x: 0,
  y: 0
}

for (let i = 0; i < commands.length; i++) {
  switch (commands[i]) {
    case "U":
      point.y++;
      break;
    case "D":
      point.y--;
      break;
    case "L":
      point.x--;
      break;
    case "R":
      point.x++;
      break;
    default:
      break;
  }
}

print(`(${point.x}, ${point.y})`)