//Écrivez un programme JavaScript qui calcule et 
// affiche la somme des éléments d'un tableau d'entiers. Le programme doit demander le nombre
//  d'éléments, puis les éléments du tableau, et afficher la somme totale.
const prompt = require('prompt-sync')();
const num = Number(prompt(" entrer un nombre délément "));
const list =[];
for (let i=0 ;i< num ; i++){
    list[i]= Number(prompt(" entrer les elements "));
    console.log (list [i] );
    
}console.log(list);

 let somme = 0
 for(let i =0 ; i< list.length ; i++){
    somme = somme + list[i];

 }console.log(somme);







