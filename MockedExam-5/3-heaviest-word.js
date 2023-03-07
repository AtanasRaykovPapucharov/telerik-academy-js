let input = ["5", "telerik", "alpha", "java", "Spring", "nodeJS"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const n = +gets();

let heaviestWord = "";
let weight = 0;
let word, currWord, currWeight;

for (let wordInd = 0; wordInd < n; wordInd++) {
  word = gets();
  currWord = word.toLowerCase().split("");
  currWeight = 0;

  currWord.forEach((letter) => {
    currWeight += letter.charCodeAt(0) - 96;
  });

  if (currWeight > weight) {
    weight = currWeight;
    heaviestWord = word;
  }
}

print(`${weight} ${heaviestWord}`);
