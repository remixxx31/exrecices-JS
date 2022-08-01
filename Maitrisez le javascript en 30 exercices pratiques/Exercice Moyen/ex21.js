var readline = require("readline-sync");
var tab = [3, 5, 10, 12];
var saisie = "";

while (saisie !== 3) {
  var saisie = parseInt(readline.question("Choissisez une Action: \n 1 AJoutez un chiffre \n 2 Affichez le tableau \n 3 quittez \n : "));
  switch (saisie) {
    case 1:
      saisieChiffre = parseInt(readline.question("Veuillez saisir un chiffre ? : "));
      tab.push(saisieChiffre);
      tab.sort(function (a, b) {
        return a - b;
      });
      affchageTableau();
      break;
    case 2:
      affchageTableau();
      break;
    default:
      console.log("Veuillez choisir une option valide !");
      break;
  }
}


function affchageTableau(){
  console.log(tab);
}
  
// corrigé de l'exercice !
// var readline = require("readline-sync");

// var tab = [3,5,10,12];
// var saisie = "";

// while(saisie!=="Q" && saisie !=="q"){
//     menu();
//     var saisie = readline.question("Quel est votre choix ? ");
//     switch(saisie){
//         case "a" :
//         case "A" : ajoutChiffre();
//         break;
//         case "b" : 
//         case "B" : afficherTab();
//         break;
//         case "q" : 
//         case "Q" : console.log("A +");
//         break;
//         default : console.log("Je n'ai pas compris");
//     }
// }

// function menu(){
//     var txt ="";
//     txt += "A/ Ajouter un chiffre \n";
//     txt += "B/ Afficher le tableau \n";
//     txt += "Q/ quitter";
//     console.log(txt);
// }
// function ajoutChiffre(){
//     var chiffre = parseInt(readline.question("Quel chiffre voulez-vous ajouter ?"));
//     var positionToPush = getPosition(tab,chiffre);
//     tab.splice(positionToPush,0,chiffre);
// }
// function getPosition(t,c){
//     for(var i=0; i < t.length; i++){
//         if(t[i] > c){
//             return i;
//         }
//     }
//     return t.length;
// }
// function afficherTab(){
//     console.log(tab);
// }