//Écrivez un programme JavaScript qui demande un nombre à l’utilisateur et affiche
//  sa table de multiplication de 1 à 10. Par exemple, pour le nombre 4
const prompt = require('prompt-sync')();
const num =Number(prompt(" entrer un nombre "));
for  (let i = 1 ; i<= 10 ; i++ ){
    console.log (`${num} * ${i} = ${num*i} `);
}