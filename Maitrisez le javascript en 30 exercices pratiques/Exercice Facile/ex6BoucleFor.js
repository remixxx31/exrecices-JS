var readline = require("readline-sync");
var saisie = parseInt(readline.question("quel nombre voulez-vous saisir ?"));
var fin = false;

while(!fin){
  if(isNaN(saisie)){
    console.log("Veuillez recommencez la saisie, veuillez saisir un nombre !");
    saisie = parseInt(readline.question("quel nombre voulez-vous saisir ?"));
  }else{
    console.log("c'est un chiffre!");
    fin = true;
  }
}

console.log("Le chiffre saisi est : " + saisie);
