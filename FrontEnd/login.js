    const messageErreur = document.querySelector(".forgot");

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
            messageErreur.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
        }
        return response.json();
      })

        .then((data) => {
            if (data.token) {
                const tokenOnly = JSON.stringify(data.token).substring(1, JSON.stringify(data.token).length - 1)
                localStorage.setItem("token", tokenOnly);
            }
        })

    if (localStorage.getItem("token") != null) {
        document.location.href = "index.html"
    }
    function logout() {
        localStorage.removeItem("token");
    }
}

const boutonCo = document.getElementById("formCo");
boutonCo.addEventListener("submit", function(event) {
    event.preventDefault();
    login();
  });