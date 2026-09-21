//Écrivez un programme JavaScript qui copie les éléments d'un tableau d'entiers
//  dans un autre tableau. Affichez les éléments du tableau original et
//  du tableau copié pour vérifier que la copie est correcte.
const prompt = require('prompt-sync')();
const num = Number(prompt(" entrer un nombre délément "));
const list =[];
for (let i=0 ;i< num ; i++){
    list[i]= Number(prompt(" entrer les elements "));
    console.log (list [i] );
}console.log(list);