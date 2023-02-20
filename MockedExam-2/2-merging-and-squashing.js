let input = ["4", "12", "23", "34", "45"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let n = +gets();

const mergedList = [];
const squashedList = [];

let curr = gets();
let next, merged, squashed;

for (let i = 1; i < n; i++) {
  next = gets();

  merged = curr[1] + next[0];
  mergedList.push(merged);

  squashed = curr[0] + ((+curr[1] + +next[0]) % 10) + next[1];
  squashedList.push(squashed);

  curr = next;
}

print(mergedList.join(" "));
print(squashedList.join(" "));