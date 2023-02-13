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

// function connexionUtilisateur() {

//     const connexion = document.querySelector(".connexion");
//     connexion.addEventListener("submit", function (event) {
//         console.log("retard")
//         event.preventDefault();
//         let form = new FormData(connexion);
//         let string = form.stringify;
//         fetch("http://localhost:5678/api/users/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: string
//         })
//         .then((response) => response.JSON())
//         .then((data)=>console.log(data))
//     })
//     }

// const connexion = document.querySelector("#submit-btn");
// connexion.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("fef")
//     const nouvelleConnexion = {
//         email: querySelector("[name=Email]").value,
//         password: querySelector("[name=password]").value
//     };
//     const identifiants = JSON.stringify(nouvelleConnexion);
//     fetch("http://localhost:5678/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: identifiants
//     })
//     .then((response) => response.JSON())
//     .then((data)=>console.log(data))
// })

// function connexionUtilisateur() {
//     console.log("fef")
// }

// const boutonCo = document.getElementById("submit-btn");
// boutonCo.addEventListener("click", connexionUtilisateur());


// if(localStorage.getItem("token") == null){

async function login() {
    // envoi des données récupérées de l'utilisateur
    await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            "email": document.querySelector("[name=email]").value,
            "password": document.querySelector("[name=password]").value
        }),
        headers: { 'Accept': 'application/json', "Content-Type": "application/json" }
    })

        .then((res) => res.json())
        .then((data) => {
            // récupération de la commande dans la console
            console.log(data);
            // création d'un ID de commande dans le localstorage
            localStorage.setItem("token", JSON.stringify(data.token));
        })
    // .catch((err) => {

    //     const erreur = document.querySelector(".forgot");
    //     erreur.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
    //     // console.log("POST erreur", err);
    //     // console.log(err);
    // })
    // if()
    function logout() {
        localStorage.removeItem("token");
    }

    if (localStorage.getItem("token") == "undefined") {
        const erreur = document.querySelector(".forgot");
        logout();
        erreur.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
    }
    else if (localStorage.getItem("token") != null) {
        document.location.href = "index.html"
    }
}

const boutonCo = document.getElementById("submit-btn");
boutonCo.addEventListener("click", login);