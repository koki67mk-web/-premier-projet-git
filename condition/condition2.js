//Écrivez un programme JavaScript qui vérifie si un caractère saisi par l'utilisateur est une voyelle ou non
//  en utilisant l'instruction switch.
const prompt = require('prompt-sync')();
let voyelle = prompt("entrée un letre ");
switch (voyelle){
    case "a" :
    case "e" :
    case "u" :
    case "o" :
    case "i" :
        console.log("une voyelle");
        break;
        default:
            console.log( "la letre pas une voyelle ")
            // la letre pas une voyelles
}