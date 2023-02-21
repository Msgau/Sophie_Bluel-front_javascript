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