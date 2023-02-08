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
    connexion.addEventListener("submit", function (event) {
        console.log("retard")
        event.preventDefault();
        let form = new FormData(connexion);
        let string = form.stringify;
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: string
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

// const boutonCo = document.getElementById("submit-btn");
// boutonCo.addEventListener("click", connexionUtilisateur());
function login(){
    // envoi des données récupérées de l'utilisateur
    fetch ("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify({
        "email": "sophie.bluel@test.tld",
        "password": "S0phie"
      }),
    headers: { 'Accept': 'application/json', "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) => {
        // récupération de la commande dans la console
        console.log(data);
        // nettoyage du panier
        // localStorage.clear();
        // création d'un ID de commande dans le localstorage
        // localStorage.setItem("orderId", data.orderId);
        // redirection vers la page de confirmation
        // window.location = confirmation.html?id=${data.orderId};
    })
    .catch((err) => {
        console.log("POST erreur", err);
    })
}
const boutonCo = document.getElementById("submit-btn");
boutonCo.addEventListener("click", login);
