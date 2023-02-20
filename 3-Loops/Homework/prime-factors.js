let num = 100;
let result = [];

for(let i= 2; i <= num; i++) {
  if(isPrime(i)) {
    while (true) {
      if (num % i !== 0) {
        break;
      }

      num /= i;
      result.push(i);
    }
  }
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

function isPrime(num) {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}