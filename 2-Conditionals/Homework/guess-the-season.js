const month = "June" // gets()
const date = Number("24")

if (
  // Spring
  month === "April" ||
  month === "May" ||
  (month === "March" && date >= 20) ||
  (month === "June" && date < 21)
) {
  console.log("Spring");
} else if (
  // Summer
  month === "July" ||
  month === "August" ||
  (month === "September" && date < 22) ||
  (month === "June" && date >= 21)
) {
  console.log("Summer");
} else if (
  // Autumn
  month === "October" ||
  month === "November" ||
  (month === "September" && date >= 22) ||
  (month === "December" && date < 21)
) {
  console.log("Autumn");
} else if (
  // Winter
  month === "January" ||
  month === "February" ||
  (month === "March" && date < 20) ||
  (month === "December" && date >= 21)
) {
  console.log("Winter");
}