const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let consumos = [];
let contador = 0;
let soma = 0;
let maior = -Infinity;
let diaMaior = 0;
function perguntar() {
    if (contador < 6) {
        rl.question("Digite o consumo de água do dia " + (contador + 1) + ": ", function(valor) {

            let consumo = Number(valor);
            consumos.push(consumo);

            soma += consumo;

            if (consumo > maior) {
                maior = consumo;
                diaMaior = contador + 1; 
            }
            contador++;
            perguntar();
        });
    } else {
        let media = soma / 6;
        console.log("Consumo total da semana:", soma);
        console.log("Média diária:", media);
        console.log("Maior consumo:", maior);
        console.log("Dia do maior consumo: Dia " + diaMaior);

        rl.close();
    }
}

perguntar();
