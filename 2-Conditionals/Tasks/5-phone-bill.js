let input = ["31", "115"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const freeMinutes = 60;
const freeMessages = 20;
const pricePerMinite = 0.1;
const pricePerMessage = 0.06;

let messages = +gets();
let minutes = +gets();
let additionalTaxes = 0;
let total = 12.0;

if (messages > freeMessages) {
  messages -= freeMessages;
} else {
  messages = 0;
}
print(
  `${messages} additional messages for ${(messages * pricePerMessage).toFixed(
    2
  )} levas`
);

total += messages * pricePerMessage;

if (minutes > freeMinutes) {
  minutes -= freeMinutes;
} else {
  minutes = 0;
}
print(
  `${minutes} additional minutes for ${(minutes * pricePerMinite).toFixed(
    2
  )} levas`
);

total += minutes * pricePerMinite;

// additional taxes
additionalTaxes += (minutes * pricePerMinite + messages * pricePerMessage) / 5;

print(`${additionalTaxes.toFixed(2)} additional taxes`);

total += additionalTaxes;

print(`${total.toFixed(2)} total bill`);