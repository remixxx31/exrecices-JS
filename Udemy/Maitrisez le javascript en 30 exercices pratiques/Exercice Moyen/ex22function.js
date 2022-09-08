
//Objet javascript à exporter pour un autre fichier
let calculManager = {
  addition : function(n){
  let result = 0;
  for (let i = 1; i <= n; i++){
    result += i;
    console.log(`Step : ${i} total: ${result} `)
  };
  console.log("Le résultat de l'addition des n premiers nombres de " + n + " est de :" + result);
},

multiplication: function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    console.log(`Step : ${i} total: ${result} `)
  };
  console.log("Le résultat de la multiplication des n premiers nombres de " + n + " est de :" + result);
  }

}

// export de l'objet export manager
module.exports = calculManager;
