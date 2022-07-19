// var readline = require("readline-sync");
// var saisieTable = parseInt(readline.question("Vous voulez connaitre la table de multiplication de quel chiffre?"));
const BTN = document.querySelector("button");
const DIV = document.querySelector("div");



BTN.addEventListener("click", function (){
  let txt = "";
  for (let i = 1; i <= 10; i++) {
    let result = 3 * i;
    txt += (`3 X ${i} = ${result}`+"<br/>");
  }
  DIV.innerHTML = txt;
});