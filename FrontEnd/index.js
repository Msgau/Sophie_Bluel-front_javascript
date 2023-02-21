import { ajouterImage, supprimerImage } from "./modifierDom.js";

// Affichage admin
const str = 'Hello World';
const textToBinary = (str = '') => {
  let res = '';
  res = str.split('').map(char => {
    return char.charCodeAt(0).toString(2);
  }).join(' ');
  return res;
};
console.log(textToBinary('Hello World'));
if (localStorage.getItem("token") != null && localStorage.getItem("token") != "undefined") {
  // Header admin
  const top = document.querySelector("header");
  const BlackString = document.createElement("div");
  BlackString.id = "blackString";
  BlackString.innerHTML = `<p><a href="#" class="edition"><i class="fa-regular fa-pen-to-square"></i>   Mode édition</a></p>
  <p class="changement"><a href="#" class="Achangement">publier les changements</a></p>`
  const Boutonlogout = document.querySelector("nav ul li a");
  Boutonlogout.href = "index.html";
  Boutonlogout.id = "sortie";
  Boutonlogout.innerHTML = "logout";
  top.appendChild(BlackString);
  //Fonction logout
  function logout() {
    localStorage.removeItem("token");
  }
  Boutonlogout.addEventListener("click", logout)
  // Bouton modifier PP
  const boutonModifierPP = document.querySelector("main figure");
  const divModifierPP = document.createElement("div");
  divModifierPP.className = "modifier";
  divModifierPP.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> modifier`
  boutonModifierPP.appendChild(divModifierPP);
  // Bouton modifier projets
  const boutonModifierProjets = document.querySelector("#portfolio");
  // boutonModifierProjets.innerHTML=` Insérer ici le html terminé`

  // Modale
  let modal = null
  let modal2 = null

  function stopPropagation(e) {
    e.stopPropagation()
  }

  function closeModal(e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', true)
    modal.setAttribute('aria-modal', false)
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
    // sectionGallery.innerText = "";
  }

  function openModal(e) {
    e.preventDefault()
    // supprimerImage();
    const target = document.querySelector('.modal')
    target.style.display = null
    target.setAttribute('aria-hidden', false)
    target.setAttribute('aria-modal', true)
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    document.querySelector(".galleryModale").innerHTML = "";
    genererObjetsModale(objets);
  }
  window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
      closeModal(e)
    }
  })
  const modal1 = document.getElementById("modifier")
  modal1.addEventListener('click', openModal)

  const reponseModale = await fetch('http://localhost:5678/api/works'); // On va chercher le Json
  const objets = await reponseModale.json(); // On crée une const objets qu'on asssocie au résultat renvoyé par le json. Equivalent à "1ere ligne".then.pieces => pieces.json();
  if (reponseModale.ok) {
    console.log(objets)
  }
  // pour tous les objets, on utilise un for of. On utilise aussi une fonction gernererObjets comme ça on purra la rappeler plusieurs fois pour mettre à jour la page web
  function genererObjetsModale(objets) {
    for (let i = 0; i < objets.length; i++) {

      const article = objets[i];
      // Récupération de l'élément du DOM qui accueillera les objets
      const sectionGallery = document.querySelector(".galleryModale");
      // Création de la balise figure qui englobe image et titre
      const objetElement = document.createElement("figure");
      const divImageElement = document.createElement("div");
      divImageElement.className = "cadreImage"
      const imageElement = document.createElement("img");
      imageElement.src = article.imageUrl;
      imageElement.alt = article.title;
      imageElement.crossOrigin = "anonymous";
      const btnCorbeille = document.createElement("button")
      btnCorbeille.className = `corbeille_` + [i] + ` trash`
      btnCorbeille.dataset.id = [i];
      btnCorbeille.id = article.id;
      btnCorbeille.innerHTML = `<i class="fa-regular fa-trash-can"></i>`
      const btnEditer = document.createElement("div")
      btnEditer.className = "btnEditerModale"
      btnEditer.innerText = "éditer";
      // const titreElement = document.createElement("figcaption");
      // titreElement.innerText = article.title;

      sectionGallery.appendChild(objetElement);
      divImageElement.appendChild(btnCorbeille);
      divImageElement.appendChild(imageElement);
      objetElement.appendChild(divImageElement);
      objetElement.appendChild(btnEditer);

      let bearerToken = localStorage.getItem("token")
      // Le machin qui supprime{
        fetch(`http://localhost:5678/api/works/${i}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        }
      });
      // const recupererId = document.querySelector(`.corbeille_0`)
      // recupererId.addEventListener('click', delete)

    }
  }

  function closeModal2(e) {
    if (modal2 === null) return
    e.preventDefault()
    modal2.style.display = "none"
    modal2.setAttribute('aria-hidden', true)
    modal2.setAttribute('aria-modal', false)
    modal2.removeEventListener('click', closeModal2)
    modal2.querySelector('.js-modal-close2').removeEventListener('click', closeModal2)
    modal2.querySelector('.js-modal-stop2').removeEventListener('click', stopPropagation)
    modal2 = null
    // sectionGallery.innerText = "";
  }
  function openModal2(e) {
    e.preventDefault()
    ajouterImage();
    const target = document.querySelector('.modal2')
    target.style.display = null
    target.setAttribute('aria-hidden', false)
    target.setAttribute('aria-modal', true)
    modal2 = target
    modal2.addEventListener('click', closeModal2)
    modal2.querySelector('.js-modal-close2').addEventListener('click', closeModal2)
    modal2.querySelector('.js-modal-stop2').addEventListener('click', stopPropagation)
  }

  const modal21 = document.querySelector(".btnAdd")
  modal21.addEventListener('click', closeModal)
  modal21.addEventListener('click', openModal2)

  const retourModal1 = document.querySelector('.retour-modal-1')
  retourModal1.addEventListener('click', closeModal2)
  retourModal1.addEventListener('click', openModal)

  // Fonction pour aperçu

  const ciblerImage = document.querySelector('#imageUp');
  ciblerImage.addEventListener('change', previewFile);
  function previewFile() {
    const verificationExtension = /\.(jpe?g|png)$/i; // Permet // de n'autoriser que les jpeg, jpg et png
    if (this.files.length === 0 || !verificationExtension.test(this.files[0].name)) { // Si il  n'y a pas de fichier, ou si verificationExtension teste le nom du fichier et que ça renvoie false (ou inversement si on elève le !) ne pas executer le code après
      console.log("fef")
      return
    }

    const vanishApercu = document.querySelector('.apercu');
    vanishApercu.innerText = "";
    const divApercu = document.createElement("div");
    divApercu.id = "fenetreApercu";
    vanishApercu.appendChild(divApercu)

    const file = this.files[0];

    const fileReader = new FileReader(); //

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (event) => displayImage(event, file));

    function displayImage(event, file) {
      const figureElement = document.createElement('figure')
      figureElement.id = "imageSelected";
      const imageElement = document.createElement('img')
      imageElement.src = event.target.result;

      const figcaptionElement = document.createElement('figcaption')
      figcaptionElement.textContent = `fichier selectionné : ${file.name}`

      figureElement.appendChild(imageElement)

      document.querySelector('#fenetreApercu').appendChild(figureElement);
    }

  }

}








// Affichage classique

const reponse = await fetch('http://localhost:5678/api/works'); // On va chercher le Json
// const reponse = await fetch('flemme.json'); // On va chercher le Json
const objets = await reponse.json(); // On crée une const objets qu'on asssocie au résultat renvoyé par le json. Equivalent à "1ere ligne".then.pieces => pieces.json();
if (reponse.ok) {
  console.log(objets)
}
// pour tous les objets, on utilise un for of. On utilise aussi une fonction gernererObjets comme ça on purra la rappeler plusieurs fois pour mettre à jour la page web
function genererObjets(objets) {
  for (let i = 0; i < objets.length; i++) {

    const article = objets[i];
    // Récupération de l'élément du DOM qui accueillera les objets
    const sectionGallery = document.querySelector(".gallery");
    // Création de la balise figure qui englobe image et titre
    const objetElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.alt = article.title;
    imageElement.crossOrigin = "anonymous";
    const titreElement = document.createElement("figcaption");
    titreElement.innerText = article.title;

    sectionGallery.appendChild(objetElement);
    objetElement.appendChild(imageElement);
    objetElement.appendChild(titreElement);
  }
}

genererObjets(objets);

// Filtres 

// Revenir à tous
const boutonTous = document.querySelector(".btnTous");
boutonTous.addEventListener("click", function () {
  document.querySelector(".gallery").innerHTML = "";
  genererObjets(objets);
})

// Filtrer les objets

const boutonItems = document.querySelector(".btnItems");

boutonItems.addEventListener("click", function () {
  const itemsFiltres = objets.filter(function (item) {
    return item.categoryId === 1; // On retourne l'élément seulement si categoryId est 1 (ce qui correspond aux objets)
  });
  // Autre façon de faire
  // const result = objets.filter(nom => nom.categoryId===1); 

  // Effacement de l'écran et régénération de la page
  document.querySelector(".gallery").innerHTML = "";
  genererObjets(itemsFiltres);
})

// Filtrer les appartements

const boutonAppartements = document.querySelector(".btnAppartements");

boutonAppartements.addEventListener("click", function () {
  const itemsFiltres = objets.filter(function (item) {
    return item.categoryId === 2;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererObjets(itemsFiltres);
})

// Filtrer les Hôtels et restaurants

const boutonHotels = document.querySelector(".btnHotels");

boutonHotels.addEventListener("click", function () {
  const itemsFiltres = objets.filter(function (item) {
    return item.categoryId === 3;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererObjets(itemsFiltres);
})

// Couleur des filtres

function changerCouleurVert() {
  document.querySelector(".btnTous").style.color = "#1D6154";
  document.querySelector(".btnTous").style.backgroundColor = "white"
}
function changerCouleurBlanc() {
  document.querySelector(".btnTous").style.color = "white";
  document.querySelector(".btnTous").style.backgroundColor = "#1D6154"
}

document.querySelectorAll('.btnItems,.btnAppartements,.btnHotels').forEach(button => { button.addEventListener("click", changerCouleurVert) })
document.querySelector(".btnTous").addEventListener("click", changerCouleurBlanc)