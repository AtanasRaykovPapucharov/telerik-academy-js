let input = ["4", "pizza", "macaroni", "kiufte", "banica"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const vowels = "aouei";
const n = +gets();

let bestFood = gets();
let bestLetters = bestFood.length;
let bestVowels = 0;

for (let j = 0; j < bestLetters; j++) {
  if (vowels.includes(bestFood[j])) bestVowels++;
}

let currentFood;
let currentLetters;
let currentVowels;

for (let i = 1; i < n; i++) {
  currentVowels = 0;
  currentFood = gets();
  currentLetters = currentFood.length;

  for (let j = 0; j < currentLetters; j++) {
    if (vowels.includes(currentFood[j])) currentVowels++;
  }

  // checking
  if (currentVowels / currentLetters < bestVowels / bestLetters) {
    bestFood = currentFood;
    bestVowels = currentVowels;
    bestLetters = currentLetters;
  } else if (currentVowels / currentLetters == bestVowels / bestLetters) {
    if (currentVowels > bestVowels) {
      bestFood = currentFood;
      bestVowels = currentVowels;
      bestLetters = currentLetters;
    } else if (currentVowels == bestVowels) {
      if (currentLetters > bestLetters) {
        bestFood = currentFood;
        bestVowels = currentVowels;
        bestLetters = currentLetters;
      }
    }
  }
}

print(`${bestFood} ${bestVowels}/${bestLetters}`);
