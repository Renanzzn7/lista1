let teclado = require(`prompt-sync`)();

let codigoPeca1: number = parseInt(teclado(`Digite o código da peça 1: `));
let numeroPecas1: number = parseInt(teclado(`Digite o número de peças 1: `));
let valorUnitario1: number = parseFloat(teclado(`Digite o valor unitário da peça 1: `));

let codigoPeca2: number = parseInt(teclado(`Digite o código da peça 2: `));
let numeroPecas2: number = parseInt(teclado(`Digite o número de peças 2: `));
let valorUnitario2: number = parseFloat(teclado(`Digite o valor unitário da peça 2: `));

let valorTotal: number = (numeroPecas1 * valorUnitario1) + (numeroPecas2 * valorUnitario2);

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);