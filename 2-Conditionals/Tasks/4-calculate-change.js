let input = ["0.76", "1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//-----------------------------

const price = parseFloat(gets());
const given = parseFloat(gets());

let difference = given - price;
difference = difference.toFixed(2).toString();

if (!difference.includes(".")) {
  print(`${difference} x 1 lev`);
} else {
  difference = difference.split(".");

  const leva = Number(difference[0]);
  if (leva > 0) print(`${leva} x 1 lev`);

  let stotinki = Number(difference[1]);
  while (stotinki > 0) {
    if (stotinki >= 50) {
      const count = parseInt(stotinki / 50);
      print(`${count} x 50 stotinki`);
      stotinki -= count * 50;
    } else if (stotinki >= 20) {
      const count = parseInt(stotinki / 20);
      print(`${count} x 20 stotinki`);
      stotinki -= count * 20;
    } else if (stotinki >= 10) {
      const count = parseInt(stotinki / 10);
      print(`${count} x 10 stotinki`);
      stotinki -= count * 10;
    } else if (stotinki >= 5) {
      const count = parseInt(stotinki / 5);
      print(`${count} x 5 stotinki`);
      stotinki -= count * 5;
    } else if (stotinki >= 2) {
      const count = parseInt(stotinki / 2);
      print(`${count} x 2 stotinki`);
      stotinki -= count * 2;
    } else {
      print(`1 x 1 stotinka`);
      stotinki = 0;
    }
  }
}
