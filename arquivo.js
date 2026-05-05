const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let listaProibida = ["João", "Carlos", "Ana"];
let visitantesAutorizados = [];
let contador = 0;
function perguntar() {
    if (contador < 3) {
        rl.question("Digite o nome do visitante: ", function(nome) {
            if (listaProibida.includes(nome)) {
                console.log("ALERTA: Segurança acionada para o visitante " + nome + "!");
            } else {
                visitantesAutorizados.push(nome);
            }
            contador++;
            perguntar(); 
        });
    } else {
        console.log("Visitantes autorizados:", visitantesAutorizados);
      rl.close();
    }
}
perguntar();
