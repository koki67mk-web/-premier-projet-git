//Écrivez un programme JavaScript pour calculer la somme de deux valeurs entières données.
//  Si les deux valeurs sont identiques, le programme doit renvoyer le triple de leur somme.
const prompt = require('prompt-sync')();
let var1 = Number(prompt("entrée un valeur "));
let var2 = Number(prompt("entrée un valeur "));
if (var1 === var2){
    let var3 = (var1+var2)*3;
    console.log("resulta" + " " +var3)
}else{
    console.log("la valeur est deférant ");
}