//Écrivez une fonction JavaScript qui prend un entier positif en paramètre et affiche
//  tous les nombres de cet entier jusqu'à 0. Utilisez une boucle dans la fonction
//  et appelez-la avec plusieurs valeurs pour vérifier son fonctionnement.
function fonc(entier){
    for (let i = entier ; i >= 0 ; i--){
        console.log (i);
    };
};
fonc(6);