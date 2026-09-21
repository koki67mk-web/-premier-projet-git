//Écrivez un programme JavaScript qui lit une chaîne de caractères et un caractère,
//  puis compte et affiche combien de fois le caractère apparaît dans la chaîne.
const prompt = require("prompt-sync")();
let text = prompt(" entré un texts ");
let caractère = prompt(" entré un caractéres ");
let compte = 0 ;
for (i = 0 ; i< text.length ; i++){
    if (caractère[i]==compte.length){
        compte++;
    }
}
console.log(compte);
