let input = ["peshoishere", "3", "eho", "piere", "telerik"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let title = gets().split("");
let count = +gets();

for (let ind = 0; ind < count; ind++) {
  check(gets(), title);
}

function check(sample, title) {
  let indexes = [];

  for (let i = 0; i < sample.length; i++) {
    let ch = sample[i];

    for (let j = 0; j < title.length; j++) {
      if (ch == title[j]) {
        if (indexes.length == 0) {
          indexes.push(j);
          break;
        } else {
          if (j > indexes[indexes.length - 1]) {
            indexes.push(j);
            break;
          }
        }
      }
    }
  }

  if (indexes.length == sample.length) {
    for (let k = 0; k < indexes.length; k++) {
      title[indexes[k]] = "";
    }

    console.log(title.join(""));
  } else {
    console.log("No such title found!");
  }

  return title;
}