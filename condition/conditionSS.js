const prompt = require('prompt-sync')();
let age = Number(prompt(" entrer votre age "));
let not = Number(prompt(" entrer votre not "));
if (age < 6 ){
    console.log("vous etes mineur");
}else if (age >= 6 && age <=24){
    console.log("vous etes accepte");
    if (not < 10){
        console.log("pas accepté");
    }else if(not >= 10 && not <=14){
        console.log("bien")
    }else{
        console.log("tree bien");
    }
}else{
    console.log("vous etes pas accepté")
}