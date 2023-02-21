const removeFirstChar = require("./string-helper").removeFirstChar;
const reverseString = require("./string-helper").reverseString;
const sortString = require("./string-helper").sortString;

(() => {
    console.log(
      "Testing 'removeFirstChar' function with input 'sample: string' and 'ch: char' "
    );

    const sample = "abcmabcd";
    const ch1 = "a";
    const ch2 = "c";
    const ch3 = "d";
    const ch4 = "q";

    let newSample = removeFirstChar(sample, ch1);
    const expected1 = "bcmabcd";
    console.log("is removing a first one correctly: " + (newSample === expected1));

    newSample = removeFirstChar(sample, ch2);
    const expected2 = "abmabcd";
    console.log("is removing someone correctly: " + (newSample === expected2));

    newSample = removeFirstChar(sample, ch3);
    const expected3 = "abcmabc";
    console.log("is removing a last one correctly: " + (newSample === expected3));

    newSample = removeFirstChar(sample, ch4);
    const expected4 = "abcmabcd";
    console.log("is removing a missed one correctly: " + (newSample === expected4));
})();

(() => {
    console.log(
    "Testing 'reverseString' function with input 'sample: string'"
    );

    const sample = "abcd";
    const expected = "dcba" === reverseString(sample);

    console.log("is reversing a string correctly: " + (expected));
})();

(() => {
  console.log("Testing 'sortString' function with input 'sample: string'");

  const sample = "acbc+";
  const expected = "+abcc" === sortString(sample);

  console.log("is sorting a string correctly: " + expected);
})();