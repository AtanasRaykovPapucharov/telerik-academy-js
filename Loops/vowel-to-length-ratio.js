let print = this.print || console.log;

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

const n = 4;
const inputs = [
    "pizza",
    "macaroni",
    "kiufte",
    "banica"
]
const vowels = "aouei";

let bestFood = inputs[0];
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
    currentFood = inputs[i];
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
