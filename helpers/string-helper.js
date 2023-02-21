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
