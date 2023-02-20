let input = ["3", "2", "5", "1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const rows = +gets();
let result = "";
let curNum, lastNum;

for (let i = 0; i < rows; i++) {
  if (i === 0) {
    lastNum = +gets();
    result += lastNum;
    continue;
  } else {
    curNum = +gets();

    if (curNum < lastNum) {
      result += `>${curNum}`;
    } else if (curNum > lastNum) {
      result += `<${curNum}`;
    } else {
      result += `=${curNum}`;
    }

    lastNum = curNum;
  }
}

print(result);
