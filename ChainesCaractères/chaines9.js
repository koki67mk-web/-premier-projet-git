//Écrivez un programme JavaScript qui lit une chaîne de caractères
//  et supprime tous les espaces. Affichez la chaîne résultante.
const prompt = require("prompt-sync")();
let text = prompt(" entré un texts ");
 let resulta = "";
for (i = 0 ; i < text.length ; i++){
    if(text[i] !== " "){
        resulta = resulta+ text[i];
    
    }
}
console.log(resulta);