module.exports.removeFirstChar = (str, ch) => {
  let ind = str.indexOf(ch);
  if (ind > -1) str = str.slice(0, ind) + str.slice(ind + 1);
  return str;
};

module.exports.reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) newString += str[i];
  return newString;
};

module.exports.sortString = (str) => {
  return str.split("").sort().join("");
};

module.exports.vowelsCount = (str) => {
  const vowels = "aeiou";
  let count = 0;

  str.split("").forEach((letter) => {
    if (vowels.includes(letter)) count++;
  });

  return count;
};

module.exports.longestEqualsCount = (str) => {
  const n = str.length;
  const charArray = str.split("");
  let sum = 0;

  for (let i = 0; i < n; i++) {
    // adding to sum
    sum += parseInt(charArray[i].charCodeAt(0));
  }

  // average equals first one
  if (sum / n === charArray[0]) {
    // all are equal
    return n;
  } else {
    const sortDescending = (arr) => arr.sort((a, b) => b - a);
    const lengthsList = [];
    let counter = 1;

    // only one digit
    if (charArray.length === 1) {
      print(1);
    } else {
      for (let i = 0; i < n - 1; i++) {
        // comparing each nums pair
        if (charArray[i] !== charArray[i + 1]) {
          // collecting current length
          lengthsList.push(counter);
          // going to count again
          counter = 1;
        } else {
          // counting equals
          counter++;
        }
      }

      return sortDescending(lengthsList)[0];
    }
  }
};
