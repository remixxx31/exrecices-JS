// class Animal{
//   constructor(){
//     this.name;
//     this.age;
//     this.sexe;
//  }
// };

// const myCat = new Animal('Firou', 12, 'M');
// console.log(myCat);

function creerAnimal(name, age, sexe) {
  var animal = {};
  animal.name = name,
  animal.age = age;
  animal.sexe = sexe;
  return animal;
};
  
function afficherListeAnimal(liste){
  let txt = "";
  for (let valeur of liste) {
    txt += "name: " + valeur.name + "\n";
    txt += "age: " + valeur.age + "\n";
    if (valeur.sexe === true) {
      txt += "sexe: Male\n"; 
    }else {
      txt += "sexe: Femelle\n"; 
    }
    txt += "---------------------------------\n";
  }
  console.log(txt);
}

function calculMoyenneAge(liste) {
  var moyenne = 0;
  for (let valeur of liste) {
    // console.log(valeur.age);
    moyenne += valeur.age;
  }
  moyenne /= liste.length;
  return moyenne;
}
const chat1 = {
  name: 'Firou',
  age: 12,
  sexe: true
}
const chat2 = {
  name: 'Kaki',
  age: 6,
  sexe: false
}

const chat3 = {
  name: 'Tigrou',
  age: 18,
  sexe: true


}
const chat4 = {
  name: 'Tya',
  age: 7,
  sexe: false
}
const chien1 = {
  name: 'Mina',
  age: 7,
  sexe: false
}
const chien2 = {
  name: 'Pam',
  age: 15,
  sexe: false
}
const chien3 = {
  name: 'Hocket',
  age: 7,
  sexe: true
}

let cat = [chat1, chat2, chat3, chat4];
let dog = [chien1, chien2, chien3];

afficherListeAnimal(cat);
afficherListeAnimal(dog);
console.log(`L'age moyen des  ${cat.length} chats est de ${calculMoyenneAge(cat)}`);
console.log(`L'age moyen des  ${dog.length} chiens est de ${calculMoyenneAge(dog)}`);