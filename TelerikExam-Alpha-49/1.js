let input = [
  "E,T,O,P,A,H,K,X,C,B,M",
  "5",
  "CH3604AC",
  "CEOOO7TO",
  "CC4140CC",
  "HO1CCCBB",
  "EK9ETTBE",
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

// let alphabet = "0abcdefghijklmnopqrstuvwxyz";

let allowedLetters = gets();
const n = +gets();

let sample, ch;

for (let i = 0; i < n; i++) {
  sample = gets();
  ch = sample.split("");

  if (
    allowedLetters.includes(ch[0]) &&
    allowedLetters.includes(ch[1]) &&
    allowedLetters.includes(ch[6]) &&
    allowedLetters.includes(ch[7]) &&
    ch[2] >= "0" &&
    ch[2] <= "9" &&
    ch[3] >= "0" &&
    ch[3] <= "9" &&
    ch[4] >= "0" &&
    ch[4] <= "9" &&
    ch[5] >= "0" &&
    ch[5] <= "9"
  ) {
    print(sample);
  }
}
