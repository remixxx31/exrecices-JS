var readline = require("readline-sync");
var saisie = parseInt(readline.question("quel nombre voulez-vous saisir ?"));
var saisie2 = parseInt(readline.question("Par quel nombre voulez-vous savoir si il est divisible?"));

let divisible = saisie % saisie2;

function divisiblePar(saisie, saisie2) {
  if (divisible === 0) {
    console.log(`Le chiffre ${saisie} est divisble par ${saisie2}`)
  } else {
    console.log(`Le chiffre ${saisie} n'est pas divisble par ${saisie2}`)
  }
}
divisiblePar(saisie, saisie2);
