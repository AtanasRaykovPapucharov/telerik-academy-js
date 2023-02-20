let input = ["2,3,1", "5,2,3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const list1 = gets().split(",");
const list2 = gets().split(",");
let result = [];

for (let i = 0; i < list1.length; i++) {
  result.push(list1[i]);
  result.push(list2[i]);
}

print(result.join(","));