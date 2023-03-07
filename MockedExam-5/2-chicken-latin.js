let input = ["Welcome to Chepelare"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const words = gets().split(" ");
let result = "";
const vowels = "aeiouAEIOU";

for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
  const wordLetters = words[wordIndex].split("");

  if (vowels.includes(wordLetters[0])) {
    wordLetters.push(wordLetters[0]);
    wordLetters[0] = "";
  }

  wordLetters.push("che");

  if (words[wordIndex].length % 2 === 0) {
    wordLetters.push("e");
  }

  result += wordLetters.join("") + " ";
}

print(result.trim());
