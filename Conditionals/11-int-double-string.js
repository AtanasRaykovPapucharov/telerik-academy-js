
// const inputType = "integer"
// let value = "8"
// const inputType = "real"
// let value = "8.5"
const inputType = "text"
let value = "www"

switch (inputType) {
  case "integer":
    value = ++value
    console.log(value)
    break
  case "real":
    value = parseFloat(value) + 1.0
    console.log(value.toFixed(2))
    break
  case "text":
    console.log(value + "*")
    break
  default: break
}
