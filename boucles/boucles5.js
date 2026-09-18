//Écrivez un programme JavaScript qui calcule la puissance d'un nombre entier base élevé
//  à un exposant exposant. Utilisez une boucle pour effectuer le calcul. Par exemple,
//  pour base = 3 et exposant = 4, le résultat est 3^4 = 81.
const prompt = require('prompt-sync')();
let b = Number(prompt(" entrer un nombre "));
let p = Number(prompt(" entrer la puissance "));
  puis = 1;
 for (let i = 1 ;i<=p ;i++){
   puis = puis * b;
 }
 console.log(puis)
 
