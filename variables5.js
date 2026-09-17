//Écrivez un programme qui demande la température en Celsius et affiche l'état de l'eau à cette température 
// (solide, liquide, gaz).
const prompt = require('prompt-sync')();
let c = Number(prompt('entré la tepérature en celsius' ));
if (c < 0){
    console.log ("solid")
}else if (c < 100){
    console.log ("liquide")
}else{
    console.log("gaz")
};