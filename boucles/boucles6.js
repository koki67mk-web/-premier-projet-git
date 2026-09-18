//Écrivez un programme JavaScript qui demande un nombre entier n et affiche 
// les n premiers nombres pairs. Par exemple, pour n = 4, affichez : 2, 4, 6, 8.
const prompt = require('prompt-sync')();
let n = Number(prompt(" entrer un nombre "));
let nom = 2 ;
for (let i = 1 ;i<= n ; i++){
    let s = 0;
    s = i * nom ;
    console.log(s)
}