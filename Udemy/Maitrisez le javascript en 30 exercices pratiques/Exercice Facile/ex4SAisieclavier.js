// requisition du module  readline-sync après installation avec npm
var readline = require("readline-sync");
var saisiePrenom = readline.question("quel est votre prénom ?")
var saisieNom = readline.question("quel est votre nom ?")
var saisieAge = parseInt(readline.question("quel est votre âge?"));
console.log(`Votre prénom est : ${saisiePrenom}`);
console.log(`Votre nom est : ${saisieNom}`);
console.log(`Votre âge est de : ${saisieAge} ans`);