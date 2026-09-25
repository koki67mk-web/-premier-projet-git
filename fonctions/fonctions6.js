//Écrivez une fonction JavaScript qui calcule le n-ième terme de la suite de Fibonacci.
//  La fonction doit prendre un entier en paramètre et retourner le n-ième terme. Utilisez cette fonction
//  pour afficher le terme de Fibonacci demandé.
function fibon(nombr){
    let suit = 0
    let term = 1
    let fonc="";
    for( let i = 0 ; i < nombr ; i++ ){
        fonc = suit + term;
        suit = term;
        term = fonc;
        console.log(fonc);
    };
}

fibon(15);