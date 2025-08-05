let teclado = require(`prompt-sync`)();

let n1: number = 0
let n2: number = 0
    console.clear();
    n1 = Number(teclado("Digite o primeiro número: "));
    n2 = Number(teclado("Digite o segundo número: "));
    console.log(`A soma de ${n1} + ${n2} = ${n1 + n2}`);

