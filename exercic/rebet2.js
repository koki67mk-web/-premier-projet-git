//Écrivez un programme JavaScript qui demande à l'utilisateur le nombre d'éléments d'un tableau,
//  puis demande à l'utilisateur de saisir ces éléments. Affichez ensuite les éléments du tableau.
const prompt = require(`prompt-sync`)();
const number = Number(prompt("entre le nomber de element "));
let table =[];
for( let i = 0 ; i < number ; i++){
    let element = prompt(" entre tes element ");
    table.push(element);
}
console.log(table);