//Écrivez un programme JavaScript piloté par menu pour convertir une année donnée 
/*const prompt = require('prompt-sync')();
let ans = Number(prompt(" entrée un anée "));
let mois = ans * 12; 
console.log(mois);
let jour = ans * 365;
console.log (jour);
let heure = jour * 24;
console.log(heure);
let min = heure * 60;
console.log(min);
let seconde = min * 60;
console.log(seconde);*/
const prompt = require('prompt-sync')();
let ans = Number(prompt(" entrée un anée "));
console.log("menu");
console.log("1- mois ");
console.log("2- jour ");
console.log("3- heure ");
console.log("4- min ");
console.log("5- seconde ");
const choix =Number(prompt("entrer votre choix "));
switch(choix){
    case 1:
        let mois = ans * 12; 
     console.log(mois);
    case 2:
        let jour = ans * 365;
     console.log (jour);
    case 3:
        let heure = jour * 24;
     console.log(heure);
    case 4:
        let min = heure * 60;
     console.log(min);
     case 5:
        let seconde = min * 60;
     console.log(seconde);
     break;
     default :
     console.log("ereur ");

}


