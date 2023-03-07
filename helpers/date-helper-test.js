const { addToDate, removeFromDate } = require("./date-helper");

const testTitle = "Date Helper Tests";
console.log("-".repeat(testTitle.length));
console.log(testTitle);
console.log("-".repeat(testTitle.length));

(() => {
  console.log("Testing 'addToDate' function with input 'date: Date' and 'num: number");

  let date = new Date("2011", "01", "13");
  let num = 3;

  const dd = date.getDate();
  const day = date.getDay();
  const year = date.getFullYear();
  const month = date.getMonth();

  date = addToDate(date, num);

  const ddExpected = date.getDate();
  const dayExpected = date.getDay();
  const yearExpected = date.getFullYear();
  const monthExpected = date.getMonth();

  console.log(
    "is adding to Date correctly: " + 
    (
      dd + num === ddExpected && 
      day + num === dayExpected &&
      year === yearExpected &&
      month === monthExpected
    )
  );
})();

(() => {
  console.log(
    "Testing 'removeFromDate' function with input 'date: Date' and 'num: number"
  );

  let date = new Date("2011", "01", "18");
  let num = 3;

  const dd = date.getDate();
  const day = date.getDay();
  const year = date.getFullYear();
  const month = date.getMonth();

  date = removeFromDate(date, num);

  const ddExpected = date.getDate();
  const dayExpected = date.getDay();
  const yearExpected = date.getFullYear();
  const monthExpected = date.getMonth();

  console.log(
    "is removing from Date correctly: " +
      (dd - num === ddExpected &&
        day - num === dayExpected &&
        year === yearExpected &&
        month === monthExpected)
  );
})();