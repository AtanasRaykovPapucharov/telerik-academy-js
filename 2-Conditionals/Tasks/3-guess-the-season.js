let input = ["April", "6"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const month = gets();
const date = Number(gets());

if (
  // Spring
  month === "April" ||
  month === "May" ||
  (month === "March" && date >= 20) ||
  (month === "June" && date < 21)
) {
  print("Spring");
} else if (
  // Summer
  month === "July" ||
  month === "August" ||
  (month === "September" && date < 22) ||
  (month === "June" && date >= 21)
) {
  print("Summer");
} else if (
  // Autumn
  month === "October" ||
  month === "November" ||
  (month === "September" && date >= 22) ||
  (month === "December" && date < 21)
) {
  print("Autumn");
} else if (
  // Winter
  month === "January" ||
  month === "February" ||
  (month === "March" && date < 20) ||
  (month === "December" && date >= 21)
) {
  print("Winter");
}