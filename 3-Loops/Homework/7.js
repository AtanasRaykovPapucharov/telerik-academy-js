const n = parseInt("3");
const x = parseFloat("2");

let result = 1;

for (let i = 1; i <= n; i++) {
  result += fact(i) / Math.pow(x, i);
}

console.log(result.toFixed(5));

function fact(m) {
  let result = 1;

  for (let i = m; i > 1; i--) {
    result *= i;
  }

  return result;
}
