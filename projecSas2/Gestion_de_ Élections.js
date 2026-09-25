const prompt = require('prompt-sync')();

let candidat = {
cin : "AB123456",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: []
};
const candidats =[];
function MenuPrincipal(){
    `========= Menu_Principal========
       1. Ajouter un nouveau candidat 
       2. Ajouter plusieurs candidats à la fois
       3. Afficher la liste des candidats 
       4. Voter pour un candidat 
       5. Modifier les informations d'un candidat 
       6. Supprimer un candidat
       7. Rechercher des candidats
       8. Statistiques de l'élection
       0. Quitter
     ===================================
`
const choix =Number(prompt(" entrer votre choix : "));
switch (choix){
    case 1 : 
}
};

function Ajouter_un_nouveau_candidat(){
    console.log("====entre votre information====");
    for(let i = 0 ; i <candidat.length ; i++){
        candidats = candidat[i];
        console.log("cin :" , candidats.cin );
        console.log("nom :" , candidats.nom );
        console.log("prenom :" , candidats.prenom);
        console.log("age :" , candidat.age );
        console.log("electeurs :" ,candidat.electeurs);
    }
} 
Ajouter_un_nouveau_candidat();
