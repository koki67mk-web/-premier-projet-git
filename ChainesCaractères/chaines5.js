//Écrivez un programme JavaScript qui lit une chaîne de caractères 
// et affiche la chaîne inversée. Par exemple, si la chaîne est "abcd", le programme doit afficher "dcba".
const prompt = require("prompt-sync")();
let text = prompt(" entré un texts ");
let textes = "";
for (let i = text.length-1 ; i >= 0 ; i--){
    textes = textes + text[i];
}
console.log(textes);
