//Écrivez une fonction JavaScript qui prend deux nombres en paramètres et retourne 
// le plus grand des deux. Utilisez cette fonction pour afficher le maximum entre deux nombres.
function nombre ( x , y){
    if(x > y ){
     console.log ("x est le max");
    } else if (x < y ){
        console.log ( "y  est le max");
     }else{
        console.log("les deux nombres sont egaux")
     }
}; nombre(10,8)
