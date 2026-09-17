//Écrivez un programme qui demande la vitesse en kilomètres par heure (km/h)
//  et la transforme en mètres par seconde (m/s).
const prompt = require('prompt-sync')();
let km = Number(prompt ('entré la vitesse en kilométres par heure  '));
let metres = km * 0.27778;
console.log(metres);