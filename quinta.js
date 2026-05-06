const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
let precos = [110000, 135000, 128000, 105000, 180000];
rl.question("Digite seu orçamento: ", function(valor) {
    let orcamento = Number(valor);
    let encontrou = false;
    for (let i = 0; i < modelos.length; i++) {
        if (precos[i] <= orcamento) {
            console.log("Você pode comprar:", modelos[i]);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Que tal olhar nossa seção de seminovos?");
    }
    rl.close();
});
