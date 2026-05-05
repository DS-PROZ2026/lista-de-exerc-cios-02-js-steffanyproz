const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let atletas = [];
let contador = 0;

function perguntar() {
    if (contador < 5) {
        rl.question("Digite o nome do atleta: ", function(nome) {
            atletas.push(nome);
            contador++;
            perguntar();
        });
    } else {
        for (let i = 0; i < atletas.length; i++) {
            if (i === 0) {
                console.log(atletas[i] + " ganhou Ouro");
            } else if (i === 1) {
                console.log(atletas[i] + " ganhou Prata");
            } else if (i === 2) {
                console.log(atletas[i] + " ganhou Bronze");
            } else {
                console.log("Participante " + atletas[i] + " recebeu medalha de honra");
            }
        }
        rl.close();
    }
}
perguntar();
