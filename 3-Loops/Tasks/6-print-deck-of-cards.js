let input = ["5"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const card = gets();
const letters = "JQKA";

if (!isNaN(card)) {
  for (let i = 2; i <= +card; i++) {
    console.log(deckLine(i));
  }
} else {
  for (let i = 2; i <= 10; i++) {
    console.log(deckLine(i));
  }

  let index = letters.indexOf(card);

  for (let j = 0; j <= index; j++) {
    console.log(deckLine(letters[j]));
  }
}

function deckLine(card) {
  return `${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds`;
}
