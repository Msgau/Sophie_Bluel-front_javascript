export function ajouterImage() {
    console.log("fef")
    const getToken = localStorage.getItem("token")
    const formulaireImageUp = document.querySelector(".connexion");
    formulaireImageUp.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(event.target.querySelector("[name=upfile]").value);
        const image = {
            image: event.target.querySelector("[name=upfile]").value,
            title: event.target.querySelector("[name=title]").value,
            category: event.target.querySelector("[name=categorie]").value
        }
        const chargeUtile = JSON.stringify(image);

        fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken}`
            },
            body: chargeUtile
        });
    });
    // const btnAjouterImage = document.querySelectorAll(".valider")
    // btnAjouterImage.addEventListener("click", async function (event){

    // })
}









export function supprimerImage(imageId) {
    console.log(imageId)
    // const getToken = localStorage.getItem("token")
    // console.log(getToken)


    // const recupererId = document.querySelectorAll(`.corbeille_`)
    // recupererId[i].addEventListener("click", function(e){
    //     console.log(recupererId[i])




    //     e.preventDefault();
    //     const reponse = fetch(`http://localhost:5678/api/works/${id}`{
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${getitem}`
    //         }
    //     });

    // if (reponse.ok) {
    //     console.log("Travail supprimé");
    // }
    // else {
    //     console.log("err")
    // }
// })
    // const creerIdBtn = document.querySelectorAll(".galleryModale figure div button") // On chope tous les boutons

    //     creerIdBtn[i].addEventListener("click", function(event)){ // On écoute tous les boutons
    //         e.preventDefault();



    //         const id = event.target.dataset.id; // On récupère la valeur de l'attribu dataId à l'aidde de la propriété dataset qu'on a créé lors de la création du bouton dans index.js
    //         const reponse = fetch (`http://localhost:5678/api/works/${id}`{
    //             method : "DELETE"
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${getitem}`
    //             }
    //         });








    //         const reponse = await fetch(`http://localhost:5678/api/works/${id}`)
    //         const corbeille = await reponse.json();
    //     } 


    // }
}