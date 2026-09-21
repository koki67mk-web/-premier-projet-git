//Écrivez un programme JavaScript qui calcule et affiche la longueur
//  d'une chaîne de caractères sans utiliser la propriété length.
const prompt = require("prompt-sync")();
let text = prompt(" entré un text ");
let leng = 0;
for (i = 0 ;i < text.length ; i++){
    leng++
    
}
console.log(leng);