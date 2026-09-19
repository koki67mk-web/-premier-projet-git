//Écrire le programme pour avoir un pyramide d'étoile,
//  le nombre des lignes à composer est demandé à l’utilisateur
//  (chaque ligne doit avoir un nombre impair d'étoiles).
const prompt = require('prompt-sync')();
const linges =Number(prompt(" entrer un nombre de linges "));
let n = "*";
for (let i = 1 ; i <= linges ; i++){
    console.log(n);
    n +="**"
}


