let tab = [2, 6, 10, 3, 8, 7, 20];
let result = 1;

for (var i = 0; i < tab.length; i++){
  if (tab[i] % 2 === 0) {
    result += tab[i];
    console.log(`itération ${i} : ${result}`);
  } else {
    console.log(`itération ${i} : pas paire !`);
  }
}
console.log(`Le total est de ${result} `);