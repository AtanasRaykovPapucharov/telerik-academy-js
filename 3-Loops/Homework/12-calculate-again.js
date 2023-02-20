const n = +"99";
const k = +"1";

let result = 1;

for (let i = n; i > k; i--) {
  if(!isOverflow(result, i)) {
    result *= i;
  } else {
    result = Infinity;
    break;
  }
}

console.log(result);

function isOverflow(a, b) {
  if (a == 0 || b == 0) return false;

  let result = a * b;
  if (result >= 9223372036854775807 || result <= -9223372036854775808) result = 0;
  if (a == parseInt(result / b)) return false;
  else return true;
}