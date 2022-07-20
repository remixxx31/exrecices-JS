const piece = document.querySelector("button");

function result() {
  var pile = Math.floor(Math.random() * 2);
  return (pile === 1) ? "pile" : "face";
}

piece.addEventListener("click", function () {
  document.querySelector("body > div").innerHTML = result();
})
