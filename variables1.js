//Écrivez un programme JavaScript qui permet d'afficher vos informations
//  personnelles : nom, prénom, âge, sexe et  adresse e-mail.
//  Les données sont saisies par l'utilisateur.
const prompt = require('prompt-sync')();
const nom = prompt('Quel est ton nom');
const prénom = prompt('Quel est ton prénom');
const âge = prompt ('Quel est ton âge');
const sexe = prompt('femme ou homme');
const adresseEmail = prompt('ecrit ton adresse email');
console.log(`bonjour ${nom} , ton ${prénom} , ton ${âge} , tu ${sexe} , ton mail ${adresseEmail} ,`);