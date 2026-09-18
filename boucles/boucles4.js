//Écrivez un programme JavaScript qui demande un nombre entier n et affiche
//  les n premiers nombres impairs. Par exemple, pour n = 5, affichez : 1, 3, 5, 7, 9.
const prompt = require('prompt-sync')();
let n = Number(prompt(" entrer un nombre "));
let num = 2 ;
for(let i = 1 ; i <= n ; i++){
    let res = 0;
    res = i * num  -1 ;
    console.log( res )
}

