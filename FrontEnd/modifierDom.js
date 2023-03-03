export async function ajouterImage() {
    try {
    const getToken = localStorage.getItem("token")
    const formulaireImageUp = document.getElementById("connexion");

        formulaireImageUp.addEventListener('submit', async function(event) {
            event.preventDefault();
            const inputFile = document.querySelector("#imageUp")
            if (inputFile.files[0].size < 4000000) {
            const formData = new FormData(formulaireImageUp);
            const datas = {}
            for (const pair of formData.entries()) {
              datas[pair[0]] = pair[1]
            }
            console.log(formData)
            const chargeUtile = JSON.stringify(formData)

        const response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken}`
            },
            body: chargeUtile
        })
        await response.json() 
}});
}
 
catch (err) {
    console.log('Une erreur est survenue',err)
  }
}






export async function fetchPostWork(formData) {
    const bearerToken = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:5678/api/works",{
        method: "POST",
        headers: {
          'authorization': `Bearer ${bearerToken}`,
          'accept':'application/json',
        },
        body: formData   
      })
      const rep = await response.json() 
        resetAll()
        addWorkWindow.style.display="none" 
    } catch (err) {
      console.log('Une erreur est survenue',err)
    }
  }

export function addWork() { 
    const postForm = document.querySelector("[name=upfile]")
    postForm.addEventListener("submit",(e)=> {
      e.preventDefault()
      if (inputFile.files[0].size < 4000000) {
        const formData = new FormData(postForm)
        fetchPostWork(formData)
      }
    }) 
  }

















export function deleteOne(){
    const imagesElements = document.querySelectorAll(".trash");
    const bearerToken = localStorage.getItem("token")
    for (let i = 0; i < imagesElements.length; i++){
      imagesElements[i].addEventListener("click", function(event){
        const id = imagesElements[i].id;
        console.log(id)
        fetch(`http://localhost:5678/api/works/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`
          }})
      })
    }}

// export function deleteOne(){
//     const imagesElements = document.querySelectorAll(".trash");
//     const bearerToken = localStorage.getItem("token")
//     for (let i=0; i < imagesElements.length; i++){
//       imagesElements[i].addEventListener("click", function(event){
//         const id = event.target.dataset.id;
//         fetch(`http://localhost:5678/api/works/${id}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${bearerToken}`
//           }})
//       })
//     }
//   }


// function deleteWork(data) {
//     const trashes = document.querySelectorAll(".fa-trash-can")
//     for (trashCan of trashes) {
//       trashCan.addEventListener("click",(e)=> {
//         const index =((Array.from(trashes)).indexOf(e.target))
//         const id = (data[index].id)
//         fetch(`http://localhost:5678/api/works/${id}`,{
//           method:"DELETE",
//           headers: {
//             'authorization': `Bearer ${userToken}`,
//           }
//         })
//         .then (response => {
//           if (response.status === 204 ) {
//             modalWindow.style.display="none";
//             thumbnailWindow.style.display="flex";
//             createDeleteThumbnail(data[index])
//             eventCloseThumbnail()     
//           } 
//         })            
//       }) 
//     } 
//   }


// export function supprimerImage(imageId) {
//     console.log(imageId)
//     // const getToken = localStorage.getItem("token")
//     // console.log(getToken)


//     const recupererId = document.querySelectorAll(`.corbeille_`)
//     recupererId[i].addEventListener("click", function(e){
//         console.log(recupererId[i])




//         e.preventDefault();
//         const reponse = fetch(`http://localhost:5678/api/works/${id}`{
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${getitem}`
//             }
//         });

//     if (reponse.ok) {
//         console.log("Travail supprimé");
//     }
//     else {
//         console.log("err")
//     }
//     })
//     const creerIdBtn = document.querySelectorAll(".galleryModale figure div button") // On chope tous les boutons

//         creerIdBtn[i].addEventListener("click", function(event)){ // On écoute tous les boutons
//             e.preventDefault();



//             const id = event.target.dataset.id; // On récupère la valeur de l'attribu dataId à l'aidde de la propriété dataset qu'on a créé lors de la création du bouton dans index.js
//             const reponse = fetch (`http://localhost:5678/api/works/${id}`{
//                 method : "DELETE"
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${getitem}`
//                 }
//             });


//         } 


//     }