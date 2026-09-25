//Écrivez une fonction JavaScript qui vérifie si un entier est pair ou impair.
//  La fonction doit prendre un entier en paramètre et
//  retourner true si l'entier est pair et false s'il est impair.
//  Utilisez cette fonction pour afficher si un nombre est pair ou impair.
function entier(nomber){
    if (nomber % 2 === 0){
        return "pair";
    }else{
        return "impair"
    }
}
console.log(entier(8));