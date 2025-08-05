let teclado = require(`prompt-sync`)();

let A: number = parseFloat(teclado(`Digite o valor de A: `));
let B: number = parseFloat(teclado(`Digite o valor de B: `));
let C: number = parseFloat(teclado(`Digite o valor de C: `));

const pi: number = 3.14159;

let areaTriangulo: number = (A * C) / 2;

let areaCirculo: number = pi * Math.pow(C, 2);

let areaTrapezio: number = ((A + B) * C) / 2;

let areaQuadrado: number = Math.pow(B, 2);

let areaRetangulo: number = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);