const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pessoas = [];
let contador = 0;
let somaIdade = 0;
let maiorIdade = -Infinity;
let nomeMaisVelho = "";

function perguntar() {
    if (contador < 5) {
        rl.question("Digite o nome da pessoa: ", function(nome)  rl.question("Digite a idade: ", function(idadeStr) {

                let idade = Number(idadeStr);
                pessoas.push({ nome: nome, idade: idade });
                somaIdade += idade;
                if (idade > maiorIdade) {
                    maiorIdade = idade;
                    nomeMaisVelho = nome;
                contador++;
                perguntar();
            });

        });
    } else {
        let media = somaIdade / 5;
        console.log("Média de idade:", media);
        console.log("Pessoa mais velha:", nomeMaisVelho);

        rl.close();
    }
}

perguntar();
