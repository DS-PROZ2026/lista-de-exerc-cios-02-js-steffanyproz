let frota = [
    { modelo: "Volvo", km: 12000, revisao: 5 },
    { modelo: "Scania", km: 8000, revisao: 7 },
    { modelo: "Mercedes", km: 15000, revisao: 3 },
    { modelo: "Iveco", km: 9000, revisao: 8 }
];
let frotaManutencao = [];

for (let i = 0; i < frota.length; i++) {
    if (frota[i].km > 10000 || frota[i].revisao > 6) {
        frotaManutencao.push(frotaa[i]);
    }
}
console.log("Veículos que precisam de manutenção:", frotaManutencao.length);
console.log("Lista:", frotaManutencao);
