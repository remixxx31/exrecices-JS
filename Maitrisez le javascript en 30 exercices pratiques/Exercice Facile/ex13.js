var nbClic = 0;
const monDiv = document.querySelector("div");

function incrementer(){
    nbClic++; // nbClic = nbClic + 1 <=> nbClic += 1
    monDiv.innerHTML = "Vous avez cliqué " + nbClic + " fois";
}