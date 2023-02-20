let input = ["28", "3", "coffee", "tea", "pineapple"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const target = Number(gets());
const n = Number(gets());
let word,
  value,
  sum = 0,
  mainSum = 0;

for (let i = 0; i < n; i++) {
  word = gets();

  for (let j = 0; j < word.length; j++) {
    sum += alphabet.indexOf(word[j]) + 1;
  }

  value = Math.abs(target - sum);
  print(`${word} ${value}`);
  mainSum += value;
  sum = 0;
}

print((mainSum / n).toFixed(2));
