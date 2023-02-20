let input = ["pizza", "macaroni", "kiufte", "banica", "END"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

let line,
  longest = gets();

while (true) {
  line = gets();

  if (line === "END") break;

  if (line.length >= longest.length) longest = line;
}

print(longest);