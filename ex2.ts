let teclado = require(`prompt-sync`)();

const pi: number = 3.14159;
let raio: number = parseFloat(teclado("Digite o raio do círculo: "));
let area: number = pi * (raio * raio);

console.log(`A área do círculo é: ${area.toFixed(4)}`);