//Écrivez un programme JavaScript qui lit deux chaînes de caractères et
//  compare si elles sont égales ou non. Affichez un message indiquant
//  si les chaînes sont égales ou différentes.
const prompt = require("prompt-sync")();
let text = prompt(" entré un texts ");
let chaines = prompt(" entré un autre texts ");
if(text === chaines){
      console.log("les chaines sont égales");
}else{
      console.log("les chaines sont différentes ");
}