const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let consumos = [];
let contador = 0;
let soma = 0;
let maior = -Infinity;
let menor = Infinity;

function perguntar() {
    if (contador < 5) {
        rl.question("Digite o consumo (km/l) do caminhão " + (contador + 1) + ": ", function(valor) {
            let consumo = Number(valor);
            consumos.push(consumo);
            soma += consumo;
            if (consumo > maior) {
                maior = consumo;
            }
            if (consumo < menor) {
                menor = consumo;
            }
            contador++;
            perguntar();
        });
    } else {
        let media = soma / 5;
        console.log("Média de consumo da frota:", media);
        console.log("Melhor consumo:", maior);
        console.log("Pior consumo:", menor);

        rl.close();
    }
}

perguntar();
