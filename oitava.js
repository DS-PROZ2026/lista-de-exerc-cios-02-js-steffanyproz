let nomesVendedores = ["Ana", "João", "Carlos", "Maria", "Pedro"];
let totalVendas = [1000, 2000, 1500, 3000, 800];
let soma = 0;
let maior = 0;
let destaque = "";
for (let i = 0; i < totalVendas.length; i++) {
    soma += totalVendas[i];
    if (totalVendas[i] > maior) {
        maior = totalVendas[i];
        destaque = nomesVendedores[i];
    }
}
let media = soma / totalVendas.length;

console.log("Média de vendas:", media);
console.log("Vendedor destaque:", destaque);
for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] < media * 0.7) {
        console.log(nomesVendedores[i] + " está abaixo da meta");
    }
}
