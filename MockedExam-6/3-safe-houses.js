let input = ["3", "0 1 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

const distances = [];
const housesCount = Number(gets());
const safeIndeces = gets()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let lastSafeIndex, distanceToEnd, averageValue;

// first possible distance
if (safeIndeces[0] != 0) {
  distances.unshift(safeIndeces[0]);
}

// middle distances
for (let i = 1; i < safeIndeces.length; i++) {
  averageValue = Math.floor((safeIndeces[i] - safeIndeces[i - 1]) / 2);
  distances.push(averageValue);
}

// last possible distance
if (safeIndeces[housesCount - 1] != 0) {
  lastSafeIndex = safeIndeces[safeIndeces.length - 1];
  distanceToEnd = housesCount - 1 - lastSafeIndex;
  distances.push(distanceToEnd);
}

const longestDistance = distances.sort((a, b) => b - a);
print(longestDistance[0]);
