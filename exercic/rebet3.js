const arrey = [10 ,9 ,15 , 26 , 13 ,2 , 1 ,18 ];
for(let i = 0 ; i < arrey.length ; i++ ){
    for( let j = 0 ; j <arrey.length-i ; j++){
        if (arrey[j]>arrey[j+1]){
              let table ="";
           table =  arrey[j] ;
           arrey[j]= arrey[j+1];
           arrey[j+1]= table;
        } 
        } 
}
console.log(arrey);