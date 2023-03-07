module.exports.isNumberArrayWave = (arr) => {
  if (arr.length < 3) return false;

  let a, b, c;

  for (let i = 1; i < arr.length - 1; i++) {
    a = arr[i - 1];
    b = arr[i];
    c = arr[i + 1];

    if ((a <= b && b <= c) || (a >= b && b >= c)) {
      return false;
    }
  }

  return true;
};

module.exports.sortNumbersAscending = (arr) => {
  return arr.sort((a, b) => a - b)
};
module.exports.sortNumbersDescending = (arr) => {
  return arr.sort((a, b) => b - a);
};

module.exports.areEqualArrays = (a, b) => {
  return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

module.exports.cutArrayRight = (arr, count) => {
  const len = arr.length;
  return arr.slice(len - count, len);
};

module.exports.cutArrayLeft = (arr, count) => {
  return arr.slice(0, count);
};

