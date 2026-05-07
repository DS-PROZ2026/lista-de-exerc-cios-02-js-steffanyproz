const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let contador = 0;
let somaPassagens = 0;
let maiorCusto = -Infinity;
let destinoMaisCaro = "";
let temBarato = false;
function perguntar() {
    if (contador < 10) {
        rl.question("Digite o destino: ", function(destino) {

            rl.question("Preço da passagem: ", function(passagemStr) {

                rl.question("Custo da hospedagem: ", function(hotelStr) {

                    let passagem = Number(passagemStr);
                    let hotel = Number(hotelStr);

                    let total = passagem + hotel;

                    somaPassagens += passagem;

                    if (total > maiorCusto) {
                        maiorCusto = total;
                        destinoMaisCaro = destino;
                    }
                    if (total < 1000) {
                        temBarato = true;
                    }
                    contador++;
                    perguntar();
                });

            });
        });
    } else {
        let media = somaPassagens / 10;

        console.log("Média das passagens:", media);
        console.log("Destino mais caro:", destinoMaisCaro);

        if (temBarato) {
            console.log("Existe destino com custo menor que R$ 1000");
        } else {
            console.log("Nenhum destino custa menos de R$ 1000");
        }

        rl.close();
    }
}

perguntar();
