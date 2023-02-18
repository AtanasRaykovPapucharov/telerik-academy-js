const n = 6;
const arr = ["1", "me", "2", "3", "pot", "jjj"];

let textResult = "";
let numberResult = 0;
let current;

for (let i = 0; i < n; i++) {
    current = arr[i]

    if(isNaN(current)) {
        textResult += `-${current}`;
    } else {
        numberResult += +current
    }
}

if (textResult === "") {
  console.log("no words");
} else {
  console.log(textResult.replace("-", ""));
}
console.log(numberResult);
