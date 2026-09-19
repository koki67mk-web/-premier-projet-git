const prompt = require('prompt-sync')();
let age =Number(prompt(" entrer ton age "));
let note =Number(prompt(" entrer ton note "));
if(age < 6){
    console.log("tu encor mineur");
}else if (age >= 6 && age <= 24){

        if (note< 10){
            console.log("vous etes rufusé ");
        }
        else if(note >= 10 && note <= 14){
        console.log("bien");
        } else {
        console.log( "trés bien");
        }
    
    
}else{
    console.log("tu es refusé");
}

    
