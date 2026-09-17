//Deux nombres réels, a et b, sont saisis au clavier. Calculez et affichez a + b, a - b, a * b,
// * et a / b avec précision décimale.
const prompt = require("prompt-sync")();
let a = Number(prompt("entreer number"));
let b = Number(prompt("entreer number"));
console.log ( a + b);
console.log ( a - b );
console.log ( a * b );
console.log ( a / b );