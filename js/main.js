let arrayProducts = [['A','B','C'], [270, 340, 390]];

let flag = true;
let coins = 0;
let menu = "";
let cont = 1;
let monedas = "";

for (let i in arrayProducts[0]) {
    menu += (`${cont}. ${arrayProducts[0][i]}\n`);
    cont += 1;
}
let arrayCoins = [10,50,100];
for (let i in arrayCoins){
    monedas += (`${Number(i) + 1}. ${arrayCoins[i]}\n`)
}
let opcUser = Number(prompt(`Elija un producto: \n${menu}`));

alert(`El precio a pagar es de: ${arrayProducts[1][opcUser - 1]}`);

let coin10 = coin50 = change = cantCoins10 = cantCoins50 = cantCoins100 = diff = cantPagada = 0;

while (cantPagada < arrayProducts[1][opcUser - 1]) {

    coins = Number(prompt(`Elija moneda: \n${monedas}`))
}