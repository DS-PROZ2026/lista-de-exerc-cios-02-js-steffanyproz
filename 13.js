const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let temperaturas = [];
let contador = 0;
let soma = 0;
let maior = -Infinity;
let sensoresAlerta = 0;

function perguntar() {
    if (contador < 6) {
        rl.question("Digite a temperatura do sensor " + (contador + 1) + ": ", function(valor) {
            let temp = Number(valor);
            temperaturas.push(temp);
            soma += temp;

            if (temp > maior) {
                maior = temp;
            }

            if (temp > 35) {
                sensoresAlerta++;
            }
            contador++;
            perguntar();
        });
    } else {
        let media = soma / 6;

        console.log("Temperatura média:", media);
        console.log("Maior temperatura:", maior);
        console.log("Sensores em alerta (>35°C):", sensoresAlerta);

        rl.close();
    }
}

perguntar();
