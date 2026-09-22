let list = ["ali" , "hajar" , "rita"];
for (let i = 0; i < list.length; i++) {
     let invers = "";
        for (let j = list[i].length - 1; j >= 0; j--) {
           invers = invers + list[i][j];
        }
        list[i]= invers;
}
console.log(list);
