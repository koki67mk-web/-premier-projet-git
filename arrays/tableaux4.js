//Écrivez un programme JavaScript qui trouve et affiche le plus grand
//  élément dans un tableau d'entiers. Le programme doit demander le nombre
//  d'éléments et les éléments du tableau.
const prompt = require('prompt-sync')();
const num = Number(prompt(" entrer un nombre délément "));
const list =[];
for (let i=0 ;i< num ; i++){
    list[i]= Number(prompt(" entrer les elements "));
    console.log (list [i] );
    
}console.log(list);
let max = list[0];
for(let i = 0 ; i <list.length ;i++){
    if(list[i] > max){ 
        max= list[i]
        
    }
}console.log(max);