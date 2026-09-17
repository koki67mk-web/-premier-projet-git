//Écrivez un programme JavaScript piloté par menu pour convertir une année donnée 
const prompt = require('prompt-sync')();
let ans = Number(prompt(" entrée un anée "));
let mois = ans * 12; 
console.log(mois);
let jour = ans * 365;
console.log (jour);
let heure = jour * 24;
console.log(heure);
let min = heure * 60;
console.log(min);
let seconde = min * 60;
console.log(seconde);

