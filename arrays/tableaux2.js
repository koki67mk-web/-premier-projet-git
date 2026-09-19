//Écrivez un programme JavaScript qui demande à l'utilisateur 
// le nombre d'éléments d'un tableau, puis demande à l'utilisateur de saisir ces éléments.
//  Affichez ensuite les éléments du tableau
const prompt = require('prompt-sync')();
const num = Number(prompt(" entrer un nombre délément "));
const list =[];
for (let i=0 ;i< num ; i++){
    list[i]= prompt(" entrer les elements ");
    console.log (list [i] );
    
}console.log(list);
list = list