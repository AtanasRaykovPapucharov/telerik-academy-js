const {
  areEqualArrays,
  cutArrayLeft,
  cutArrayRight,
  isNumberArrayWave,
  sortNumbersAscending,
  sortNumbersDescending,
} = require("./array-helper");

const testTitle = "Array Helper Tests";
console.log("-".repeat(testTitle.length));
console.log(testTitle);
console.log("-".repeat(testTitle.length));

(() => {
  console.log(
    "Testing 'isNumberArrayWave' function with input sample: 'array[number]'"
  );

  const sample1 = [2, 1, 2, 1, 2, 1, 2];
  const expected1 = isNumberArrayWave(sample1);

  const sample2 = [2, 1, 5, 7, 2, 1, 23];
  const expected2 = !isNumberArrayWave(sample2);

  console.log("returns correctly: " + (expected1 && expected2));
})();

(() => {
  console.log(
    "Testing 'sortNumbersAscending' function with input sample: 'array[number]'"
  );

  const sample = [2, 1, 5, 3, 0];
  const expected = areEqualArrays(
    sortNumbersAscending(sample),
    [0, 1, 2, 3, 5]
  );

  console.log("is sorting correctly: " + expected);
})();

(() => {
  console.log(
    "Testing 'sortNumbersDescending' function with input sample: 'array[number]'"
  );

  const sample = [2, 1, 5, 3, 0];
  const expected = areEqualArrays(
    sortNumbersDescending(sample),
    [5, 3, 2, 1, 0]
  );

  console.log("is sorting correctly: " + expected);
})();

(() => {
  console.log(
    "Testing 'cutArrayRight' function with input sample: 'array[any], number'"
  );

  const sample = [2, 1, 5, 3, 11, 9, 111];
  const sample2 = ["book", "moon", "fire", "tree", "wave", "jump", "sea"];

  const resultSample = [5, 3, 11, 9, 111];
  const count = 5;
  const expected = areEqualArrays(cutArrayRight(sample, count), resultSample);

  const resultSample1 = [11, 9, 111];
  const count1 = 3;
  const expected1 = areEqualArrays(
    cutArrayRight(sample, count1),
    resultSample1
  );

  const resultSample2 = ["fire", "tree", "wave", "jump", "sea"];
  const expected2 = areEqualArrays(
    cutArrayRight(sample2, count),
    resultSample2
  );

  const totalExpected = expected && expected1 && expected2;

  console.log("is cutting correctly: " + totalExpected);
})();

(() => {
  console.log(
    "Testing 'cutArrayLeft' function with input sample: 'array[any], number'"
  );

  const sample = [2, 1, 5, 3, 11, 9, 111];
  const sample2 = ["book", "moon", "fire", "tree", "wave", "jump", "sea"];

  const resultSample = [2, 1, 5, 3, 11];
  const count = 5;
  const expected = areEqualArrays(cutArrayLeft(sample, count), resultSample);

  const resultSample1 = [2, 1, 5];
  const count1 = 3;
  const expected1 = areEqualArrays(
    cutArrayRight(sample, count1),
    resultSample1
  );

  const resultSample2 = ["book", "moon", "fire", "tree", "wave"];
  const expected2 = areEqualArrays(cutArrayLeft(sample2, count), resultSample2);

  const totalExpected = expected && expected1 && expected2;

  console.log("is cutting correctly: " + totalExpected);
})();

