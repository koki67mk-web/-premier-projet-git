//Écrivez un programme JavaScript qui crée un objet pour représenter un étudiant
//  avec les propriétés nom, prenom et un tableau de notes. Attribuez 
// des valeurs aux propriétés et aux notes, puis affichez les informations de l'étudiant.
const personne = {
    nom : "rita",
    prenom : "rachid",
    not : [10 ,12 , 15 , 20 , 8]   
};
for (let cle in personne){
    console.log(cle,personne[cle]);
}