let sample = "1,2,3,4,5,6".split(",")
const n = 3

console.log([...sample.slice(n), ...sample.slice(0, n)].join(","));