var readline = require("readline-sync");
var saisie = parseInt(readline.question("Entrez le nombre dont vous voulez connaitre la factorielle : "));
let factorielle = 1;
for (let i = 1; i <= saisie; i++){
  factorielle *= i;  
  console.log(`Etape ${i} : ${factorielle}`);
}
console.log(`Le résultat de la factorielle de ${saisie}: ${factorielle}`);
