export function ajouterImage() {
    console.log("fef")
    const getToken = localStorage.getItem("token")
    console.log(getToken)
    const formulaireImageUp = document.querySelector(".connexion");
    formulaireImageUp.addEventListener("submit", function (event) {
        event.preventDefault();
        const image = {
            title: event.target.querySelector("[name=title]").value,
            category: event.target.querySelector("[name=categorie]").value
        }
        const chargeUtile = JSON.stringify(image);

        fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getitem}`},
            body: chargeUtile
        });
    });
    // const btnAjouterImage = document.querySelectorAll(".valider")
    // btnAjouterImage.addEventListener("click", async function (event){

    // })
}

export function supprimerImage(imageId) {
    console.log(imageId)
    const getToken = localStorage.getItem("token")
    console.log(getToken)

    // const creerIdBtn = document.querySelectorAll(".galleryModale figure div button") // On chope tous les boutons

    // for(let i = 0; i < imageId.length; i++){ // On lance une boucle
    //     creerIdBtn[i].addEventListener("click", async function(e)){ // On écoute tous les boutons
    //         e.preventDefault();
    //         const id = e.target.dataset.id; // On récupère la valeur de l'attribu dataId à l'aidde de la propriété dataset qu'on a créé lors de la création du bouton dans index.js
    //         const reponse = await fetch (`http://localhost:5678/api/works/${id}`{
    //             method : "DELETE"
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${getitem}`
    //             }
    //         });
    //         if(response.ok){
    //             console.log("Travail supprimé");
    //         }
    //         else{
    //             console.log("err")
    //         }







    //         const reponse = await fetch(`http://localhost:5678/api/works/${id}`)
    //         const corbeille = await reponse.json();
    //     } 


    // }
}