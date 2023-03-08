function supprimerDom(trashId){

  const cadres = `cadre_${trashId}`
  const selectionCadre = document.getElementById(cadres)
  selectionCadre.setAttribute("class", "hidden")
  setTimeout(vanish, 500)
  function vanish(){
    selectionCadre.style.display = "none";
  }

}

export function deleteOne(){
    const imagesElements = document.querySelectorAll(".trash");
    const bearerToken = localStorage.getItem("token")
    for (let i = 0; i < imagesElements.length; i++){
      const findId = imagesElements[i].id
      imagesElements[i].addEventListener("click", function(event){
        event.preventDefault();
        const trashId = findId.substring(10);
        console.log(trashId)
        fetch(`http://localhost:5678/api/works/${trashId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`
          }})
          supprimerDom(trashId);
          setTimeout(genererObjets2, 50)
          retourInput();
          
      })
    }}

  export function deleteAll(article) {
      const bearerToken = localStorage.getItem("token")
      // Le machin qui supprime
      fetch(`http://localhost:5678/api/works/${article.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        }
      });
      const delGallery = document.querySelector(".galleryModale");
      delGallery.setAttribute("class", "galleryModale hidden");
      setTimeout(vanishAll, 500)
      function vanishAll(){
        delGallery.style.display = "none"
        document.getElementById("supprimerGalerie").innerHTML = "Gallerie supprimée avec succès";
        document.querySelector(".gallery").innerHTML = "";
      }

    }



    async function EnvoiImage(formData) {
  try {
    const getToken = localStorage.getItem("token")
    await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        'accept':'application/json',
        "Authorization": `Bearer ${getToken}`
      },
      body: formData
    })
    
  } catch (err) {
    console.log('Une erreur est survenue', err)
  }
}

export function ajouterImage() {
    const formImageUp = document.getElementById("connexion");
    formImageUp.addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById("submit-btn").setAttribute("class", "valider");
      document.querySelector(".gallery").innerHTML = "";
      const inputFile = document.getElementById("imageUp")
      console.log(inputFile.files[0].size)
      if (inputFile.files[0].size < 4000000) {
        const formData = new FormData(formImageUp);
        EnvoiImage(formData)
        setTimeout(genererObjets2, 50)
        retourInput()
        closeModal2()
      }
    });
}

// Affiche à nouveau le bouton parcourir à la place de l'aperçu
function retourInput(){
  const retourBtn = document.querySelector('.apercu');
  retourBtn.style.display = "flex"
  const departApercu = document.getElementById('fenetreApercu')
  departApercu.removeAttribute("class")
  departApercu.innerHTML= ""
  document.getElementById("imageUp").value = "";
}
function stopPropagation(e) {
  e.stopPropagation()
}
function closeModal2() {
  let modal2 = document.querySelector('.modal2')
  modal2.style.display = "none"
  modal2.setAttribute('aria-hidden', true)
  modal2.setAttribute('aria-modal', false)
  modal2.removeEventListener('click', closeModal2)
  modal2.querySelector('.js-modal-close2').removeEventListener('click', closeModal2)
  modal2.querySelector('.js-modal-stop2').removeEventListener('click', stopPropagation)
  modal2 = null
}

// Regénérer le fetch


async function genererObjets2() {
  document.querySelector(".gallery").innerHTML = "";
  const reponse = await fetch('http://localhost:5678/api/works'); // On va chercher le Json
  const objets2 = await reponse.json();
  for (let i = 0; i < objets2.length; i++) {
    const article2 = objets2[i];
    // Récupération de l'élément du DOM qui accueillera les objets
    const sectionGallery2 = document.querySelector(".gallery");
    // Création de la balise figure qui englobe image et titre
    const objetElement2 = document.createElement("figure");
    const imageElement2 = document.createElement("img");
    imageElement2.src = article2.imageUrl;
    imageElement2.alt = article2.title;
    const titreElement2 = document.createElement("figcaption");
    titreElement2.innerText = article2.title;

    sectionGallery2.appendChild(objetElement2);
    objetElement2.appendChild(imageElement2);
    objetElement2.appendChild(titreElement2);
  }
}