//Écrivez un programme JavaScript qui demande un nombre entier n à l’utilisateur
//  et calcule la somme des n premiers nombres naturels. Par exemple,
//  pour n = 4, la somme est 1 + 2 + 3 + 4 = 10.
const prompt = require('prompt-sync')();
let n = Number(prompt(" entrer un nombre "));
let num = 0;
for(let i = 1 ; i <= n ; i++){
    num = num + i;
} console.log (` la somme = ${num} `);

