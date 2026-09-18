//Écrivez un programme JavaScript qui demande un nombre à l’utilisateur et affiche
//  sa table de multiplication en ordre décroissant, de 10 à 1. Par exemple, pour le nombre 5, affichez :
const prompt = require('prompt-sync')();
const num =Number(prompt(" entrer un nombre "));
for  (let i = 10 ; i>= 1 ; i-- ){
    console.log (`${num} * ${i} = ${num*i} `);
}