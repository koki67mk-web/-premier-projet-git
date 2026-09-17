//Écrivez un programme qui demande la distance en kilomètres et la transforme en yards.
const prompt = require('prompt-sync')();
let km = Number(prompt ('entré la distance en kilométres'));
let yards = km * 1093.61 
console.log(yards);