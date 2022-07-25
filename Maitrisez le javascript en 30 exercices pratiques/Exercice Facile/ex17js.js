var readline = require("readline-sync");
let saisie = parseInt(readline.questionInt("Veuillez saisir le chiffre 3: "));

// let inp = document.querySelector("body > input[type=text]").innerHTML;

do {
  console.log("Veuillez recommencez");
  saisie = parseInt(readline.questionInt("Veuillez saisir le chiffre 3: "));
} while (saisie !== 3);
console.log("Bonne réponse");
