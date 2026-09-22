//Écrivez un programme JavaScript qui crée un objet pour représenter un point
//  dans un plan avec les propriétés x et y. Modifiez directement les valeurs de 
// ses propriétés, puis affichez les valeurs du point.
const point = {
    x : "hajar" ,
    y : 25
};
point.x = "rita";
point.y = 86;
for (let cle in point ){
    console.log(cle,point[cle]);
};