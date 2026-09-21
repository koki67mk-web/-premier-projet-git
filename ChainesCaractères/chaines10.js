// Écrivez un programme JavaScript qui lit une chaîne de caractères principale
//  et une sous-chaîne, puis vérifie si la sous-chaîne est présente 
// dans la chaîne principale. Affichez un message indiquant si la sous-chaîne est trouvée ou non.
const prompt = require("prompt-sync")();
let text = prompt(" entré une chaîne ");
let sousChaine = prompt(" entré une sous-chaîne ");
    if (text.includes(sousChaine)){
          console.log("la sous-chaîne est trouvée");
    }else{
        console.log("la sous-chaîne est pas trouvée");
    }
    
   
