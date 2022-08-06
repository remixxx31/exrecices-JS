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
    let force = (this.taille * this.poids) / this.age;
    console.log(`La force de ${this.nom} est de ${force}`);
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
    let force = (this.taille * this.poids) / this.age;
    console.log(`La force de ${this.nom} est de ${force}`);
  },
};

// function getForce(sportif) {
//   let force = (sportif.taille * sportif.poids) / sportif.age;
//   console.log(`La force du ${sportif} est de ${force}`);
// }
// getForce(sportif1);
sportif1.affichage();
sportif1.getForce();
