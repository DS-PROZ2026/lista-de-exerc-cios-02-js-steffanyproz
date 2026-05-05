const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let mochila = [];
let contador = 0;
function perguntarItem() {
    if (contador < 6) {
        rl.question("Digite o item encontrado: ", function(item) {
            if (mochila.length < 4) {
                mochila.push(item);
                contador++;
                perguntarItem();
            } else {
                rl.question("Mochila cheia! Deseja descartar o primeiro item? (S/N): ", function(resposta) {
                    if (resposta.toUpperCase() === "S") {
                        mochila.shift(); 
                        mochila.push(item);
                    }
                    contador++;
                    perguntarItem();
                });
            }
        });
    } else {
        console.log("Itens finais na mochila:", mochila);
        rl.close();
    }
}
perguntarItem();
