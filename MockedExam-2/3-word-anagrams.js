let input = [
  "anagram",
  "6",
  "gramana",
  "aaagrnm",
  "anagra",
  "margana",
  "abc",
  "xy",
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const target = sortString(gets());
let n = +gets();
let sample;

for (let i = 0; i < n; i++) {
  sample = sortString(gets());
  print((sample === target) ? "Yes" : "No");
}

function sortString(str) {
  return str.split("").sort().join("");
}
