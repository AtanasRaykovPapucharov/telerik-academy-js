const input = "1,2,2,2,4,7".split(",");
let result = [];
let isIn = false;
let current;

result.push(input[0]);

for (let i = 1; i < input.length; i++) {
  current = input[i];

  for (let j = 0; j < result.length; j++) {
    if (current == result[j]) {
      isIn = true;
    }
  }

  if (!isIn) {
    result.push(current);
  }
  
    isIn = false;
}

console.log(result.join(","));
