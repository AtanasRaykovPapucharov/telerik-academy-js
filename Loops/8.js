let input = "4.50";
let result = "";

if (!isNaN(input)) {
  if (input.includes(".")) {
    let splitted = input.split(".");
    result = parseFloat(`${Number(splitted[0]) + 1}.${splitted[1]}`);
  } else {
    result = Number(input) + 1;
  }
} else {
  for (let i = input.length - 1; i >= 0; i--) {
    result += input[i];
  }
}

console.log(result);
