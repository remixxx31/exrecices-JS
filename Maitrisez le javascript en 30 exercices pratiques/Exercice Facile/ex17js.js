var readline = require("readline-sync");
let saisie = parseInt(readline.questionInt("Veuillez saisir le chiffre 3: "));

// let inp = document.querySelector("body > input[type=text]").innerHTML;

while (saisie !==3) {
  console.log("Veuillez recommencez");
  saisie = parseInt(readline.questionInt("Veuillez saisir le chiffre 3: "));
}
console.log("Bonne réponse");
