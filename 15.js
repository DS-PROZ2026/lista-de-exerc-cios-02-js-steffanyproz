const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let custos = [];
let contador = 0;
let soma = 0;
let maior = -Infinity;
function perguntar() {
    if (contador < 4) {
        rl.question("Digite o custo da manutenção " + (contador + 1) + ": ", function(valor) {
            let custo = Number(valor);
            custos.push(custo);

            soma += custo;

            if (custo > maior) {
                maior = custo;
            }
            contador++;
            perguntar();
        });
    } else {
        let media = soma / 4;

        console.log("Custo total:", soma);
        console.log("Custo médio:", media);
        console.log("Manutenção mais cara:", maior);

        rl.close();
    }
}

perguntar();
