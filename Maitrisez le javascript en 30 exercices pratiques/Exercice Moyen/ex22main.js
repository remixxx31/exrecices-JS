let calculManager = require("./ex22function.js");
var readline = require("readline-sync");

function menu() {
  let txt = "Saisir l'action à réaliser : \n";
  txt += "1: Addition des n premiers nombres \n";
  txt += "2: Multiplier les n premiers nombres \n";
  txt += "3: quittez";
  console.log(txt);
}

do {
  menu();
  var saisie = parseInt(readline.question("Tapez le numero correspondant a l'action a realiser: "));
  if (saisie === 1) {
    calculManager.addition(parseInt(readline.question("quel nombre voulez-vous saisir?: ")));
  } else if (saisie === 2) {
    calculManager.multiplication(parseInt(readline.question("quel nombre voulez-vous saisir?: ")));
  } else if (saisie === 3){
    console.log("Au revoir !");
  }
} while (saisie !== 3);

