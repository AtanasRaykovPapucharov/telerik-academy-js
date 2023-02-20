const price = parseFloat("1.92");
const given = parseFloat("5");

let difference = given - price;
difference = difference.toFixed(2).toString();

if(!difference.includes(".")) {
    console.log(`${difference} x 1 lev`);
} else {
    difference = difference.split(".");

    const leva = Number(difference[0]);
    if(leva > 0) console.log(`${leva} x 1 lev`);
 
    let stotinki = Number(difference[1]);
    while(stotinki > 0) {
        if (stotinki >= 50) {
            const count = parseInt(stotinki / 50);
            console.log(`${count} x 50 stotinki`);
            stotinki -= count*50;
        } else if (stotinki >= 20) {
            const count = parseInt(stotinki / 20);
            console.log(`${count} x 20 stotinki`);
            stotinki -= count*20;
        } else if (stotinki >= 10) {
            const count = parseInt(stotinki / 10);
            console.log(`${count} x 10 stotinki`);
            stotinki -= count*10;
        } else if (stotinki >= 5) {
            const count = parseInt(stotinki / 5);
            console.log(`${count} x 5 stotinki`);
            stotinki -= count*5;
        } else if (stotinki >= 2) {
            const count = parseInt(stotinki / 2);
            console.log(`${count} x 2 stotinki`);
            stotinki -= count*2;
        } else {
            console.log(`1 x 1 stotinka`);
            stotinki = 0
        } 
    }
}