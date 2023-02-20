let input = ["4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

// Your solution starts here

let n = Number(gets());
let entries = n * n;
let row = 0;
let col = -1; // for convenience and code consistency
let counter = 0;
let matrix = [];

// create matrix
for (let i = 0; i < n; i++) {
  matrix[i] = new Array(n);
}

while (counter < entries) {
  // right
  while (col < n - 1 && !matrix[row][col + 1]) {
    matrix[row][++col] = ++counter;
  }

  // down
  while (row < n - 1 && !matrix[row + 1][col]) {
    matrix[++row][col] = ++counter;
  }

  // left
  while (col > 0 && !matrix[row][col - 1]) {
    matrix[row][--col] = ++counter;
  }

  // up
  while (row > 0 && !matrix[row - 1][col]) {
    matrix[--row][col] = ++counter;
  }
}

print(matrix);
