//Écrivez un programme JavaScript qui lit un entier n et affiche tous les nombres
//  premiers de 1 à n. Un nombre est considéré premier s'il est divisible uniquement par 1 et lui-même.
const prompt = require("prompt-sync")();
let num = Number(prompt(" entrer un nomber "));
for (let i = 2; i < num; i++) {
  let premier = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      premier = false;
      break;
    }
  }
  if (premier === true) {
    console.log(i);
  }
}



