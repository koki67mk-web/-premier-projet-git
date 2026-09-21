//Écrivez un programme JavaScript qui lit un entier à plusieurs chiffres
//  et l'affiche en ordre inverse sans utiliser de tableaux. Par exemple,
//  si l'entrée est 12345, affichez 54321.
//Écrivez un programme JavaScript qui lit un entier à plusieurs chiffres et
// l'affiche en ordre inverse sans utiliser de tableaux. Par exemple, si l'entrée est 12345, affichez 54321.
const prompt = require("prompt-sync")();
let nomber = Number(prompt(" entrer des nombers "));
let reverse = 0;
while (nomber > 0) {
  let inverse = nomber % 10;
  reverse = reverse * 10 + inverse;
  nomber = (number-mood)/ 10;
}
console.log(reverse);