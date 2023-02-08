// // Fonction qui bloque ou débloque le bouton connexion

// function getCodeValidation() {
//     return document.getElementById("code-validation");
// }
// function disableSubmit(disabled) {
//     if (disabled) {
//         document
//             .getElementById("submit-btn")
//             .setAttribute("disabled", true);
//     } else {
//         document
//             .getElementById("submit-btn")
//             .removeAttribute("disabled");
//     }
// }

// // Le bouton est bloqué par défaut

// document
//     .getElementById("submit-btn")
//     .setAttribute("disabled", true);
// getCodeValidation().innerText = "Entrez un mot de passe";

// // Le bouton se débloque si on écrit un seul caractère

// document
//     .getElementById("code")
//     .addEventListener("input", function (e) {
//         if (/^/.test(e.target.value)) {
//             getCodeValidation().innerText = "";
//             disableSubmit(false);
//         }
//     });
// connexionUtilisateur();

function connexionUtilisateur() {
    const connexion = document.querySelector(".connexion");
    console.log("fef")
    connexion.addEventListener("submit", function (event) {
        event.preventDefault();
        const nouvelleConnexion = {
            email: event.target.querySelector("[name=Email]").value,
            password: event.target.querySelector("[name=password]").value
        };
        const identifiants = JSON.stringify(nouvelleConnexion);
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: identifiants
        })
        .then((response) => response.JSON())
        .then((data)=>console.log(data))
    })
}



// email: sophie.bluel@test.tld
// password: S0phie

// function connexionUtilisateur() {
//     console.log("fef")
// }

// const boutonCo = document.getElementById("submit-btn")
// boutonCo.addEventListener("click", function () {
//     connexionUtilisateur();
// })


// let user = {
//     name: 'John',
//     surname: 'Smith'
//   };
  
//   let response = await fetch('/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
//   });
  
//   let result = await response.json();
//   alert(result.message);