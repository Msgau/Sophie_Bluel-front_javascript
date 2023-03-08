// if(localStorage.getItem("token") == null){
    const erreur = document.querySelector(".forgot");
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
    .then(response => {
        if (!response.ok) {
            logout();
            erreur.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
        }
        return response.json();
      })

        .then((data) => {
            if (data.token) {
                // récupération de la commande dans la console
                console.log(data);
                // création d'un ID de commande dans le localstorage
                localStorage.setItem("token", JSON.stringify(data.token).substring(1, JSON.stringify(data.token).length - 1));
                console.log("token " + localStorage.getItem('token'))
            }
        })

    if (localStorage.getItem("token") != null) {
        document.location.href = "index.html"
    }
    function logout() {
        localStorage.removeItem("token");
    }


}

const boutonCo = document.getElementById("submit-btn");
boutonCo.addEventListener("click", login);