//Écrivez un programme qui demande un nombre et affiche si ce nombre est pair ou impair.
const prompt = require('prompt-sync')();
let num = Number(prompt("entrée un nombr"));
if (num % 2 === 0){
    console.log("pair");
}else {
    console.log( "impair");
}
