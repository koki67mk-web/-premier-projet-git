//Écrivez un programme JavaScript qui implémente la recherche dichotomique dans
//  un tableau trié d’entiers. Le programme doit demander à l’utilisateur 
// un nombre et rechercher ce nombre dans le tableau en utilisant la méthode de recherche dichotomique.
let x = [10 , 5 , 9 , 6 , 12 , 13 , 14 ];
let r =[];
for (let i=0 ; i< x.length ; i++){
    if (x[i]% 2=== 0){
        console.log(`${x[i]} : pair `);
             r.push(x[i]);

    }else{
        console.log(`${x[i]} : impair`);
    }
}console.log(r)