//Écrivez un programme JavaScript qui lit deux chaînes de caractères et les concatène
//  en une seule chaîne. Affichez la chaîne résultante.
const prompt = require("prompt-sync")();
let text = prompt(" entré un texts ");
let chaines = prompt(" entré un autre texts ");
let text2 =  text + " " + chaines ;
console.log( text2);

