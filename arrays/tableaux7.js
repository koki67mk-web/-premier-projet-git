//Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un tableau
//  d'entiers, puis affiche le tableau trié en ordre 
// croissant sans utiliser de fonction de tri prédéfinie.
const prompt = require('prompt-sync')();
const num = Number(prompt(" entrer un nombre délément "));
const list =[];
for (let i=0 ;i< num ; i++){
    list[i]= Number(prompt(" entrer les elements "));
    console.log (list [i] );
}console.log(list);
let fonc = 0;
for( let i=0 ;i < num ;i++){ 

    for(let j=0 ; j < num - 1 ; j++){
        if (list[j] > list[j+1] ){ 
          let fonc = list[j];
          list[j]=list[j+1];
          list[j+1]= fonc;
        }

    }
}