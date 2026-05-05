const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let temperaturas = [];
let contador = 0;
let soma = 0;
let maior = -Infinity;
let menor = Infinity;
function perguntarTemp() {
    if (contador < 7) {
        rl.question("Digite a temperatura do dia " + (contador + 1) + ": ", function(valor) {
            let temp = Number(valor);
            temperaturas.push(temp);
            soma += temp;
            if (temp > maior) {
                maior = temp;
            }
            if (temp < menor) {
                menor = temp;
            }
            contador++;
            perguntarTemp();
        });
    } else {
        let media = soma / 7;
        console.log("Média da semana:", media);
        console.log("Maior temperatura:", maior);
        console.log("Menor temperatura:", menor);
        rl.close();
    }
}
perguntarTemp();
