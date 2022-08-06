let classe = {
  Marc :{
    nom: "marc",
    age: 21,
    Notes: [12,15,13,10,7]
  },
  Eric: {
    nom: "eric",
    age: 18,
    Notes: [5,15,3,8,17]
  }, 
  Marie: {
    nom: "marie",
    age: 22,
    Notes: [10,10,11,11,11]
  }, 
  afficherELeve: function(eleve){
    let txt = "Nom: "+ eleve.nom + "\n";
    txt += "Age: "+ eleve.age + "\n";
    txt += "Notes: "+ "\n";
    let n = 0;
   for (let element of eleve.Notes) {
     txt += `num${n} - ${element} \n`;
     n = n+1;
    }
    console.log(txt);
  }
}

// function afficherELeve(eleve) {
//   let txt = "Nom: "+ eleve.nom + "\n";
//    txt += "Age: "+ eleve.age + "\n";
//    txt += "Notes: "+ "\n";
//    let n = 0;
//   for (let element of eleve.Notes) {
//     txt += `num${n} - ${element} \n`;
//     n = n+1;
//   }

// }

// possibilité d'intégrer la fonction dans l'objet classe
function moyEleve(eleve) { 
  let moy = 0;
  for (let element of eleve.Notes) {
    moy += element;
  }
  moy /= eleve.Notes.length;
  console.log(`La moyenne de ${eleve.nom} est de : ${moy}`);
};
// function afficherClasse() { 
//   for (let eleve of classe) {

//  }

//  console.log(txt);
// }

classe.afficherELeve(classe.Marc);
// console.log(classe.Eric.Notes);
moyEleve(classe.Eric);
moyEleve(classe.Marc);
