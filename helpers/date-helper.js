module.exports.addToDate = (date, num) => {
  return new Date(date.setDate(date.getDate() + num));
};

module.exports.removeFromDate = (date, num) => {
  return new Date(date.setDate(date.getDate() - num));
};

module.exports.weekDaysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
