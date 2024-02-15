
let arrayProducts = [['A','B','C'], [270, 340, 390]];
let arrayCoins = [10,50,100];
let flag = true;
let coins = 0;
let menu = "";
let cont = 1;
let monedas = "";
let coin10 = 0;
let coin50 = 0;
let change = 0;
let cantCoins10 = 0;
let cantCoins50 = 0;
let cantCoins100 = 0;
let diff = 0;
let cantPagada = 0;


for (let i in arrayProducts[0]) {
    menu += (`${cont}. ${arrayProducts[0][i]}\n`);
    cont += 1;
}

for (let i in arrayCoins){
    monedas += (`${Number(i) + 1}. ${arrayCoins[i]}\n`)
}
let opcUser = Number(prompt(`Elija un producto: \n${menu}`));

alert(`El precio a pagar es de: ${arrayProducts[1][opcUser - 1]}`);

while (cantPagada < arrayProducts[1][opcUser - 1]) {
    coins = Number(prompt(`Elija moneda: \n${monedas}`));
    if (coins === 1) {
        cantCoins10 += 10;
    } else if (coins === 2) {
        cantCoins50 += 50;
    } else if (coins === 3) {
        cantCoins100 += 100;
    }
    cantPagada = cantCoins10 + cantCoins50 + cantCoins100;
    alert(`Usted lleva ingresado: ${cantPagada}`)
    if (cantPagada >= arrayProducts[1][opcUser - 1]) {
        let diff = cantPagada - arrayProducts[1][opcUser - 1];
        let coin50 = Math.floor(diff / 50);
        let change = diff % 50;
        let coin10 = Math.floor(change / 10);
        alert(`Su vuelto es de: $${diff}\n\t $50x ${coin50}\n\t $10x ${coin10}`);
    }
    
}