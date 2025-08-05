let teclado = require(`prompt-sync`)();

let A: number = parseInt(teclado(`Digite o valor de A: `));
let B: number = parseInt(teclado(`Digite o valor de B: `));
let C: number = parseInt(teclado(`Digite o valor de C: `));
let D: number = parseInt(teclado(`Digite o valor de D: `));

let diferenca: number = (A * B) - (C * D);

console.log(`DIFERENCA = ${diferenca}`);