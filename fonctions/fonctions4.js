//Écrivez une fonction JavaScript qui prend deux nombres en paramètres et
//  retourne le plus petit des deux. Utilisez cette fonction pour afficher le minimum entre deux nombres.
function nombre ( x , y){
    if(x < y ){
     console.log ("x est le minim");
    } else if (y < x ){
        console.log ( "y  est le minim");
     }else{
        console.log("les deux nombres sont egaux");
     }
}; nombre(8,18)