//Écrivez une fonction JavaScript qui calcule la factorielle d'un entier positif.
//  La fonction doit prendre un entier en paramètre et retourner sa factorielle. 
// Utilisez cette fonction pour afficher la factorielle d'un nombre donné.
function facto( nomber){
    let multi = 1;
    for (let i = 1; i <= nomber; i++){
        multi = multi * i
    
    }
    return multi;
};console.log(facto(nombre=2));
