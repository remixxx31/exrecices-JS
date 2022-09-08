// requisition du module  readline-sync après installation avec npm
var readline = require("readline-sync");
var saisie = parseInt(readline.question("Table de multiplication de quel chiffre svp?"));

for (var i = 1; i <= 10; i++){
  let result = saisie * i;
  console.log(`${saisie} X ${i} = ${result} `);
}
