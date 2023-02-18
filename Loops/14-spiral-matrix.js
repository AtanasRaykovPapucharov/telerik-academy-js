const n = 4
const matrix = Array.from({ length: n }, () => [])

let row = 0
let col = 0
let rowEnd = n - 1
let colEnd = n - 1
let counter = 1
let line = null

while (col <= colEnd && row <= rowEnd) {
    // right
    for (let i = col; i <= colEnd; i++) {
        matrix[row][i] = counter
        counter++
    }
    row++

    // down
    for (let i = row; i <= rowEnd; i++) {
        matrix[i][colEnd] = counter
        counter++
    }
    colEnd--

    // left
    for (let i = colEnd; i >= col; i--) {
        matrix[rowEnd][i] = counter
        counter++
    }
    rowEnd--

    // up
    for (let i = rowEnd; i >= row; i--) {
        matrix[i][col] = counter
        counter++
    }
    col++
}

// printing
for (let i = 0; i < n; i++) {
    line = ""

    for (let j = 0; j < n; j++) {
        line += `${matrix[i][j]} `
    }

    console.log(line.trim())
}