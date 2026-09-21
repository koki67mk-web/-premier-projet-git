//Écrivez un programme JavaScript qui affiche tous les facteurs d'un nombre
//  entier positif n entré par l’utilisateur. Par exemple, pour n = 36, affichez : 1, 2, 3, 4, 6, 9, 12, 18, 36.
const prompt = require("prompt-sync")();
let n = Number(prompt(" entrer un nomber "));
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}