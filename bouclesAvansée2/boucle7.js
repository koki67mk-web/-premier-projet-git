//Écrivez un programme JavaScript qui génère les n premiers termes de la suite
//  de Fibonacci, où n est entré par l’utilisateur. La suite de Fibonacci est définie
// comme suit : F(0) = 0, F(1) = 1, et F(n) = F(n-1) + F(n-2).
const prompt = require("prompt-sync")();
let n = Number(prompt(" entrer un nomber "));
let somme = 0;
let fibon = 1;
let suiv = 0;
for (let i = 1; i < n; i++) {
  suiv = somme + fibon;
  somme = fibon;
  fibon = suiv;
  console.log(suiv);
}