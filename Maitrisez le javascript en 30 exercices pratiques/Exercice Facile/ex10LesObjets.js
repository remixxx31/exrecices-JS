var readline = require("readline-sync");
// var nom = readline.question("quel est est le nom du personnage? ");
// console.log(nom);
// var age = readline.question("quel est l'age de votre personnage? ");
// console.log(age);

// var personnage = {
//   name: nom,
//   age: age
// }

// console.log(personnage);
// ou

var personnage = {};

personnage.name = readline.question("quel est votre nom ? ");
personnage.age = parseInt(readline.question("quel est votre age ? "));

console.log(personnage);

personnage.carac = {};
personnage.carac.force = 9;
personnage.carac.agility = 10;
personnage.carac.endurance = 2;

console.log(personnage);
