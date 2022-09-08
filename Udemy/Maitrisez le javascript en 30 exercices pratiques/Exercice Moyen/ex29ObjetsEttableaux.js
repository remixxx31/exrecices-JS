let sportif1 = {
  nom: "toto",
  age: 25,
  poids: 80,
  taille: 180,

  affichage: function () {
    let txt = "Nom: " + this.nom + " \n";
    txt += "Age: " + this.age + " \n";
    txt += "Poids: " + this.poids + " \n";
    txt += "Taille: " + this.taille + " \n";
    console.log(txt);
  },
  getForce: function () {
    let force = 0;
    return force = (this.taille * this.poids) / this.age;
  },
};

let sportif2 = {
  nom: "marcel",
  age: 32,
  poids: 100,
  taille: 175,
  affichage: function () {
    let txt = "Nom: " + this.nom + " \n";
    txt += "Age: " + this.age + " \n";
    txt += "Poids: " + this.poids + " \n";
    txt += "Taille: " + this.taille + " \n";
    console.log(txt);
  },
  getForce: function () {
    let force = 0;
    return force = (this.taille * this.poids) / this.age;
  },
};

// function getForce(sportif) {
//   let force = (sportif.taille * sportif.poids) / sportif.age;
//   console.log(`La force du ${sportif} est de ${force}`);
// }
// getForce(sportif1);
sportif1.affichage();
console.log(sportif1.getForce());
// sportif2.getForce();

let forceToto = sportif1.getForce();
let forceM = sportif2.getForce();

if (forceToto > forceM) {
  console.log("Toto est plus fort que Marcel !");
} else {
  console.log("Marcel est plus fort que Toto !");
}
