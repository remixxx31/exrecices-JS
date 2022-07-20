const btn = document.querySelector("button");


btn.addEventListener("click", function rand() {
 return document.querySelector("div").innerHTML = swTrue();
})

  function swTrue(){
    let random = Math.floor(Math.random() * 20);
    let result = "ok";
    switch (true){
      case random < 7:
        result = "petit";
        break;
      case random < 15:
        result = "moyen";
        break;
      case random >= 15:
        result = "grand";
        break;
    }
    return result + " " + random;
  }
