let funcionarios = [
    { nome: "Ana", salario: 2500 },
    { nome: "Carlos", salario: 3500 },
    { nome: "Maria", salario: 4000 },
    { nome: "Pedro", salario: 2800 }
];
let i = 0;
while (i < funcionarios.length) {
    if (funcionarios[i].salario > 3000) {
        console.log(funcionarios[i].nome);
    }
    i++;
}
