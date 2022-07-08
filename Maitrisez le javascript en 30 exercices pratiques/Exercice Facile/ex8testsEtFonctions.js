var readline = require("readline-sync");
var saisie = (readline.question("quel mot voulez-vous saisir ?"));
let nb = saisie.length;

function nbCar(saisie) {
  if (nb < 8) {
    console.log(`le mot ${saisie} contient ${nb} caractères.`)
  } else {
    console.log(`le mot ${saisie} fait plus de 8 caractères.`)
  }
}

nbCar(saisie);