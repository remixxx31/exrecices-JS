// requisition du module  readline-sync après installation avec npm
var readline = require("readline-sync");
const PUISSANCE = 2;
var saisie = readline.question("Vous voulez connaitre la puissance de quel chiffre?");
console.log(saisie);

let resultat = Math.pow(saisie, PUISSANCE);

console.log(`La puissance de ${saisie} est égal à ${resultat}`);