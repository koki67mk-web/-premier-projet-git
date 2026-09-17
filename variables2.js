//Écrivez un programme qui demande la température en Celsius et la transforme en Kelvin.
const prompt = require('prompt-sync')();
let c = Number(prompt ('entré température en Celsius'));
let sum = c + 273.15
console.log( sum  );