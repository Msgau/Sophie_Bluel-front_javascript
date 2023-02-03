// Fonction qui bloque ou débloque le bouton connexion

function getCodeValidation() {
    return document.getElementById("code-validation");
}
function disableSubmit(disabled) {
    if (disabled) {
        document
            .getElementById("submit-btn")
            .setAttribute("disabled", true);
    } else {
        document
            .getElementById("submit-btn")
            .removeAttribute("disabled");
    }
}

// Le bouton est bloqué par défaut

document
            .getElementById("submit-btn")
            .setAttribute("disabled", true);
            getCodeValidation().innerText = "Entrez un mot de passe";

// Le bouton se débloque si on écrit un seul caractère

document
    .getElementById("code")
    .addEventListener("input", function (e) {
        if (/^/.test(e.target.value)) {
            getCodeValidation().innerText = "";
            disableSubmit(false);
        }
    });


// email: sophie.bluel@test.tld
// password: S0phie
