const freeMinutes = 60;
const freeMessages = 20;
const pricePerMinite = 0.1;
const pricePerMessage = 0.06;

let messages = +"18"; //gets();
let minutes = +"44"; //gets();
let additionalTaxes = 0;
let total = 12.0;

if (messages > freeMessages) {
  messages -= freeMessages;
} else {
  messages = 0;
}
console.log(
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
console.log(
  `${minutes} additional minutes for ${(minutes * pricePerMinite).toFixed(
    2
  )} levas`
);

total += minutes * pricePerMinite;

// additional taxes
additionalTaxes += (minutes * pricePerMinite + messages * pricePerMessage) / 5

console.log(`${additionalTaxes.toFixed(2)} additional taxes`);

total += additionalTaxes;

console.log(`${total.toFixed(2)} total bill`);
