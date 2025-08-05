let teclado = require(`prompt-sync`)();

let numeroFuncionario: number = parseInt(teclado(`Digite o número do funcionário: `));
let horasTrabalhadas: number = parseInt(teclado(`Digite o número de horas trabalhadas: `));
let valorPorHora: number = parseFloat(teclado(`Digite o valor que recebe por hora: `));

let salario: number = horasTrabalhadas * valorPorHora;

console.log(`numero = ${numeroFuncionario}`);
console.log(`salario = U$ ${salario.toFixed(2)}`);