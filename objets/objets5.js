//Écrivez un programme JavaScript qui crée un objet pour représenter un livre avec
//  les propriétés titre, auteur et année. Écrivez une fonction qui retourne 
// un objet initialisé avec des valeurs données. Affichez les informations du livre.
function livre(titre , auteur , année){
   return{
      titre : titre,
      auteur : auteur,
      année : année
   };
};
console.log (livre( "antigon" ,"vector hego", 1945 ));
