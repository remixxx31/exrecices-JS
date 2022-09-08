const login = document.querySelector("#login");
const passWord = document.querySelector("#password");
const resultatPassword = document.querySelector("#resultatPassword");

login.addEventListener("keyup",() => {
    // commence par lettre ou chiffres, contient un @, .entre 2 et 6 caractères après
    var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if (!regex.test(login.value)) {
      login.style.backgroundColor = "red";
    } else {
      login.style.backgroundColor = "green";
    }
  });

password.addEventListener("blur", () => {
    let carDecial = /\d/;
    let caracSpeciaux = /[$&@!]/;
    let error = "";

    if (password.value.length < 6) {
      error += "<li>trop court </li>";
    } else if (password.value.length > 8) {
      error += "<li> est trop long</li>";
    }
    if (!password.value.match(carDecial)) {
      error += "<li>doit contenir un chiffre</li>";
    }

    if (error !== "") {
      resultatPassword.innerHTML = "Le Resultat est: <ul>" + error + "</ul>";
      resultatPassword.style.border = "2px solid red";
    } else {
      resultatPassword.innerHTML = "Le résultat est valide";
      resultatPassword.style.border = "2px solid green";
    }
  });
