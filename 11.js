const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let nomes = [];
let contador = 0;

function cadastrar() {
    if (contador < 5) {
        rl.question("Digite um nome: ", function(nome) {
            nomes.push(nome);
            contador++;
            cadastrar();
        });
    } else {
        // busca com while
        let i = 0;
        let encontrado = false;

        while (i < nomes.length) {
            if (nomes[i] === "Ricardo") {
                console.log("Usuário encontrado");
                encontrado = true;
                break; // para o loop
            }
            i++;
        }
        if (!encontrado) {
            console.log("Não cadastrado");
        }

        rl.close();
    }
}

cadastrar();
