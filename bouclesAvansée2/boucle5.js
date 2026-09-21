//Écrivez un programme JavaScript qui demande à l’utilisateur un nombre entier n
//  et calcule la somme des n premiers nombres naturels. Par exemple, si n est 5, la somme est 1 + 2 + 3 + 4 + 5 = 15.
const prompt = require("prompt-sync")();
let n = Number(prompt(" entrer un nomber "));
let somme = 0;
for (let i = 1; i <= n; i++) {
  somme += i;
}
console.log(somme);