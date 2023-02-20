let input = ["27"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let n = +gets();

let line;
const primes = [];
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

for (let i = 2; i <= n; i++) {
  if (isPrime(i)) primes.push(i);
}

primes.forEach(num => {
  line = "1";

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) line += "1";
    else line += "0";
  }

  print(line);
});